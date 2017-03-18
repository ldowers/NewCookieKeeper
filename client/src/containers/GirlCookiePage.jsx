import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Auth from '../modules/Auth';
import GirlCookie from '../components/GirlCookie.jsx';

class GirlCookiePage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            girlCookies: [],
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
        console.log("GirlCookie Page: componentDidMount");

        axios.get('/api/girlCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
            .then(function (response) {
                if (response.data && response.data.girlCookies) {
                    var girlCookies = this.modifyCookies(response.data.girlCookies);
                    this.setState({
                        girlCookies: girlCookies
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
        let girlCookie = {};
        let convertedDate = moment(new Date(row.date));

        row.total = 0;

        for (const prop in row) {
            if (prop === "TAL" || prop === "SMR" || prop === "LEM" || prop === "SB" || prop === "TM" || prop === "PBP" ||
            prop === "CD" || prop === "PBS" || prop === "GFT" || prop === "MCS") {
                if (row[prop] === "") {
                    row[prop] = "0";
                }
                row.total += parseInt(row[prop]);
                girlCookie[prop] = parseInt(row[prop]);
            }
            else if (prop === "date") {
                row.date = moment(convertedDate).format('MM/DD/YYYY');;
                girlCookie[prop] = row.date;
            }
            else if (prop !== "_id" && prop !== "total") {
                girlCookie[prop] = row[prop];
            }
        }

        console.log("Girl Cookie: " + girlCookie);
        axios.post('/api/girlCookie', girlCookie, {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
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
        axios.delete('/api/girlCookie', {
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

  modifyCookies(girlCookies) {
        console.log("modifyCookies called");

        if(girlCookies.length === 0){
            return
        }

        for(let i = 0; i < girlCookies.length; i++){
            girlCookies[i].date = moment(girlCookies[i].date).format('MM/DD/YYYY');
            girlCookies[i].total =  
            girlCookies[i].TAL +
            girlCookies[i].SMR + 
            girlCookies[i].LEM + 
            girlCookies[i].SB + 
            girlCookies[i].TM + 
            girlCookies[i].PBP + 
            girlCookies[i].CD + 
            girlCookies[i].PBS + 
            girlCookies[i].GFT + 
            girlCookies[i].MCS; 
        }

        return girlCookies;
    }

    /**
     * Render the component.
    */
    render() {
        return (
            <GirlCookie
                girlCookies={this.state.girlCookies}
                options={this.state.options}
            />
        );
    }
}

export default GirlCookiePage;