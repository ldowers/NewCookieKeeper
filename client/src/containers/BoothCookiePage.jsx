import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Auth from '../modules/Auth';
import BoothCookie from '../components/BoothCookie.jsx';

class BoothCookiePage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            boothCookies: [],
            options: {
                afterInsertRow: this.onAfterInsertRow,
                afterDeleteRow: this.onAfterDeleteRow,
                defaultSortName: 'start',
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
        console.log("BoothCookiePage: componentDidMount");

        axios.get('/api/boothCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
            .then(function (response) {
                if (response.data && response.data.boothCookies) {
                    var boothCookies = this.modifyCookies(response.data.boothCookies);
                    this.setState({
                        boothCookies: boothCookies
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
        let boothCookie = {};
        let convertedStartDate = moment(new Date(row.start));
        let convertedEndDate = moment(new Date(row.end));

        row.total = 0;

        for (const prop in row) {
            if (prop === "TAL" || prop === "SMR" || prop === "LEM" || prop === "SB" || prop === "TM" || prop === "PBP" ||
            prop === "CD" || prop === "PBS" || prop === "GFT" || prop === "MCS") {
                if (row[prop] === "") {
                    row[prop] = "0";
                }
                row.total += parseInt(row[prop]);
                boothCookie[prop] = parseInt(row[prop]);
            }
            else if (prop === "start") {
                row.start = moment(convertedStartDate).format('MM/DD/YYYY h:mm a');
                boothCookie[prop] = row.start;
            }
            else if (prop === "end") {
                row.end = moment(convertedEndDate).format('MM/DD/YYYY h:mm a');
                boothCookie[prop] = row.end;
            }
            else if (prop !== "_id" && prop !== "total") {
                boothCookie[prop] = row[prop];
            }
        }

        console.log("Booth Cookie: " + boothCookie);
        axios.post('/api/boothCookie', boothCookie, {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
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
        axios.delete('/api/boothCookie', {
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

  modifyCookies(boothCookies) {
        console.log("modifyCookies called");

        if(boothCookies.length === 0){
            return
        }

        for(let i = 0; i < boothCookies.length; i++){
            boothCookies[i].start = moment(boothCookies[i].start).format('MM/DD/YYYY h:mm a');
            boothCookies[i].end = moment(boothCookies[i].end).format('MM/DD/YYYY h:mm a');
            
            boothCookies[i].total =  
            boothCookies[i].TAL +
            boothCookies[i].SMR + 
            boothCookies[i].LEM + 
            boothCookies[i].SB + 
            boothCookies[i].TM + 
            boothCookies[i].PBP + 
            boothCookies[i].CD + 
            boothCookies[i].PBS + 
            boothCookies[i].GFT + 
            boothCookies[i].MCS; 
        }

        return boothCookies;
    }

    /**
     * Render the component.
    */
    render() {
        return (
            <BoothCookie
                boothCookies={this.state.boothCookies}
                options={this.state.options}
            />
        );
    }
}

export default BoothCookiePage;