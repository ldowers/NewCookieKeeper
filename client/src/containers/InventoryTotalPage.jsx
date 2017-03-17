import React from 'react';
import Auth from '../modules/Auth';
import InventoryTotal from '../components/InventoryTotal.jsx';


class InventoryTotalPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      inventoryTotal: [
        {

          "from": "Troop",
          "TAL": 168,
          "SMR": 180,
          "LEM": 132,
          "SB": 123,
          "TM": 490,
          "PBP": 276,
          "CD": 259,
          "PBS": 120,
          "GFT": 12,
          "MCS": 23,
        }, {
          "from": "Girl Scouts",
          "TAL": 127,
          "SMR": 123,
          "LEM": 95,
          "SB": 79,
          "TM": 322,
          "PBP": 187,
          "CD": 166,
          "PBS": 55,
          "GFT": 8,
          "MCS": 21,
        }, {
          "from": "Booths",
          "TAL": 27,
          "SMR": 157,
          "LEM": 37,
          "SB": 44,
          "TM": 168,
          "PBP": 83,
          "CD": 93,
          "PBS": 61,
          "GFT": 4,
          "MCS": 2,
        },
        {
          "from": "Remaining",
          "TAL": 27,
          "SMR": 157,
          "LEM": 37,
          "SB": 44,
          "TM": 168,
          "PBP": 83,
          "CD": 93,
          "PBS": 61,
          "GFT": 4,
          "MCS": 2,
        }
      ]
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log("InventoryTotalPage: componentDidMount");
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/inventoryTotal');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("InventoryTotalPage: status 200");
        this.setState({
          inventoryTotal: xhr.response.inventoryTotal
        });
      }
      else {
        console.log("Inventory Total Page: status: " + xhr.status);
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<InventoryTotal inventoryTotal={this.state.inventoryTotal} />);
  }

}

export default InventoryTotalPage;
