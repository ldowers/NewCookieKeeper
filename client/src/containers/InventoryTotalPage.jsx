import React from 'react';
import axios from 'axios';
import Auth from '../modules/Auth';
import InventoryTotal from '../components/InventoryTotal.jsx';

class InventoryTotalPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      inventoryTotal: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log("InventoryTotalPage: componentDidMount");
    let troopTotal = {};
    let girlTotal = {};
    let boothTotal = {};
    let remaining = {};
    let newInventoryTotal = [];

    axios.get('/api/troopCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
        .then(function (response) {
            if (response.data && response.data.troopCookies) {
                troopTotal = this.addUpCookies("Troop", response.data.troopCookies);
                newInventoryTotal.push(troopTotal);
                
                axios.get('/api/girlCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
                  .then(function (response) {
                    if (response.data && response.data.girlCookies) {
                      girlTotal = this.addUpCookies("Girl Scouts", response.data.girlCookies);
                      newInventoryTotal.push(girlTotal);

                      axios.get('/api/boothCookie', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
                        .then(function (response) {
                          if (response.data && response.data.boothCookies) {
                            boothTotal = this.addUpCookies("Booths", response.data.boothCookies);
                            newInventoryTotal.push(boothTotal);

                            remaining = this.calculateRemaining(troopTotal, girlTotal, boothTotal);
                            newInventoryTotal.push(remaining);

                            this.setState({
                              inventoryTotal: newInventoryTotal
                            });
                          }
                        }.bind(this))
                        .catch(function (error) {
                          console.log(error);
                        });
                    }
                  }.bind(this))
                  .catch(function (error) {
                    console.log(error);
                  });
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
  }               

  addUpCookies(from, cookies) {
    console.log("addUpCookies called");

    var total = {
      "from": from,
      "TAL": 0,
      "SMR": 0,
      "LEM": 0,
      "SB": 0,
      "TM": 0,
      "PBP": 0,
      "CD": 0,
      "PBS": 0,
      "GFT": 0,
      "MCS": 0,
      "total": 0
    }

    total.from = from;

    if(cookies.length === 0){
        return
    }

    for(let i = 0; i < cookies.length; i++){
        total.TAL += cookies[i].TAL;
        total.SMR += cookies[i].SMR;
        total.LEM += cookies[i].LEM;
        total.SB += cookies[i].SB;
        total.TM += cookies[i].TM;
        total.PBP += cookies[i].PBP;
        total.CD += cookies[i].CD;
        total.PBS += cookies[i].PBS;
        total.GFT += cookies[i].GFT;
        total.MCS += cookies[i].MCS;
    }

    total.total = 
    total.TAL +
    total.SMR + 
    total.LEM + 
    total.SB + 
    total.TM + 
    total.PBP + 
    total.CD + 
    total.PBS + 
    total.GFT + 
    total.MCS; 

    return total;
  }

  calculateRemaining(troop, girl, booth) {
    console.log("calculateRemaining called");
    
    var remaining = {
      "from": "Remaining",
      "TAL": 0,
      "SMR": 0,
      "LEM": 0,
      "SB": 0,
      "TM": 0,
      "PBP": 0,
      "CD": 0,
      "PBS": 0,
      "GFT": 0,
      "MCS": 0,
      "total": 0
    }

    remaining.TAL = troop.TAL - girl.TAL - booth.TAL;
    remaining.SMR = troop.SMR- girl.SMR - booth.SMR;
    remaining.LEM = troop.LEM - girl.LEM - booth.LEM;
    remaining.SB = troop.SB - girl.SB - booth.SB;
    remaining.TM = troop.TM - girl.TM - booth.TM;
    remaining.PBP = troop.PBP - girl.PBP - booth.PBP;
    remaining.CD = troop.CD - girl.CD - booth.CD;
    remaining.PBS = troop.PBS - girl.PBS - booth.PBS;
    remaining.GFT = troop.GFT - girl.GFT - booth.GFT;
    remaining.MCS = troop.MCS - girl.MCS - booth.MCS;

    remaining.total = 
    remaining.TAL +
    remaining.SMR + 
    remaining.LEM + 
    remaining.SB + 
    remaining.TM + 
    remaining.PBP + 
    remaining.CD + 
    remaining.PBS + 
    remaining.GFT + 
    remaining.MCS;

    return remaining;
  }

  /**
   * Render the component.
   */
  render() {
    return (<InventoryTotal inventoryTotal={this.state.inventoryTotal} />);
  }

}

export default InventoryTotalPage;
