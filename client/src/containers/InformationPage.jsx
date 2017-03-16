import React from 'react';
import axios from 'axios';
import Auth from '../modules/Auth';
import Information from '../components/Information.jsx';


class InformationPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      girls: [],
      options: {
        afterInsertRow: this.onAfterInsertRow,
        afterDeleteRow: this.onAfterDeleteRow
      }
    };

    this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
    this.onAfterDeleteRow = this.onAfterDeleteRow.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log ("InformationPage: componentDidMount");
    
    axios.get('/api/girl', {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
      .then(function (response) {
        if (response.data && response.data.girls) {
          this.setState({
            girls: response.data.girls
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
      let newRowStr = '';

      for (const prop in row) {
          newRowStr += prop + ': ' + row[prop] + ' \n';
      }
      alert('The new row is:\n ' + newRowStr);

      axios.post('/api/girl', row, {headers: {'Authorization': `bearer ${Auth.getToken()}`}})
        .then(function (response) {
          console.log("Save succesful");
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  //======================================
  //code to delete rows
  onAfterDeleteRow(rowKeys) {
      alert('The rowkey you dropped: ' + rowKeys);

      axios.delete('/api/girl', {
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

  /**
   * Render the component.
   */
  render() {
    return (
      <Information 
        girls={this.state.girls}
        options={this.state.options}
      />
    );
  }

}

export default InformationPage;
