import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Auth from '../modules/Auth';
import TroopCookie from '../components/TroopCookie.jsx';

class TroopCookiePage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            troopCookies: [],
            options: {
                afterInsertRow: this.onAfterInsertRow,
                afterDeleteRow: this.onAfterDeleteRow,
                defaultSortName: 'date',
                defaultSortOrder: 'asc'
            }
        };

        this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
        this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);
    }

    /**
   * This method will be executed after initial rendering.
   */
    componentDidMount() {
        console.log("TroopCookiePage: componentDidMount");

        axios.get('/api/troopCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
            .then(function (response) {
                if (response.data && response.data.troopCookies) {
                    var troopCookies = this.modifyCookies(response.data.troopCookies);
                    this.setState({
                        troopCookies: troopCookies
                    });
                }
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    //======================================
    //code to insert rows
    onAfterInsertRow(row) {
        console.log("onAfterInsertRow called");
        let troopCookie = {};
        let convertedDate = moment(new Date(row.date));

        row.total = 0;

        for (const prop in row) {
            if (prop === "TAL" || prop === "SMR" || prop === "LEM" || prop === "SB" || prop === "TM" || prop === "PBP" ||
            prop === "CD" || prop === "PBS" || prop === "GFT" || prop === "MCS") {
                if (row[prop] === "") {
                    row[prop] = "0";
                }
                row.total += parseInt(row[prop]);
                troopCookie[prop] = parseInt(row[prop]);
            }
            else if (prop === "date") {
                row.date = moment(convertedDate).format('MM/DD/YYYY');;
                troopCookie[prop] = row.date;
            }
            else if (prop !== "_id" && prop !== "total") {
                troopCookie[prop] = row[prop];
            }
        }

        console.log("Troop Cookie: " + troopCookie);
        axios.post('/api/troopCookie', troopCookie, {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
            .then(function (response) {
                console.log("Save succesful");
                row._id = response.data._id;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //======================================
    //code to delete rows
    onAfterDeleteRow(rowKeys) {
        console.log("onAfterDeleteRow called");
        axios.delete('/api/troopCookie', {
            headers: {'Authorization': `bearer ${Auth.getToken()}`},
            params: {
                idArray: rowKeys
            } 
        })
        .then(function (response) {
            console.log("Delete succesful");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    modifyCookies(troopCookies) {
        console.log("modifyCookies called");

        if(troopCookies.length === 0){
            return
        }

        for(let i = 0; i < troopCookies.length; i++){
            troopCookies[i].date = moment(troopCookies[i].date).format('MM/DD/YYYY');
            troopCookies[i].total =  
            troopCookies[i].TAL +
            troopCookies[i].SMR + 
            troopCookies[i].LEM + 
            troopCookies[i].SB + 
            troopCookies[i].TM + 
            troopCookies[i].PBP + 
            troopCookies[i].CD + 
            troopCookies[i].PBS + 
            troopCookies[i].GFT + 
            troopCookies[i].MCS; 
        }

        return troopCookies;
    }

    /**
     * Render the component.
    */
    render() {
        return (
            <TroopCookie 
                troopCookies={this.state.troopCookies}
                options={this.state.options}
            />
        );
    }
}

export default TroopCookiePage;