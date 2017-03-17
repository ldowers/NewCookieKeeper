import React from 'react';
import axios from 'axios';
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
                this.setState({
                    girlCookies: response.data.girlCookies
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

        row.total = 0;

        let newRowStr = '';
        for (const prop in row) {
            if (prop !== "_id" && prop !== "total") {
                girlCookie[prop] = row[prop];
            }
            if (prop === "TAL" || prop === "SMR" || prop === "LEM" || prop === "SB" || prop === "TM" || prop === "PBP" ||
            prop === "CD" || prop === "PBS" || prop === "GFT" || prop === "MCS") {
                row.total += parseInt(row[prop]);
            }
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('The new row is:\n ' + newRowStr);

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
        axios.delete('/api/girlCookie', {
            headers: {'Authorization': `bearer ${Auth.getToken()}`},
            params: {
                idArray: rowKeys
            } 
        })
        .then(function (response) {
            console.log("Delete succesful");
            alert('The rowkeys you dropped: ' + rowKeys);
        })
        .catch(function (error) {
            console.log(error);
        });
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