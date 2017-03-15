import React from 'react';
import Auth from '../modules/Auth';
import Information from '../components/Information.jsx';


class InformationPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      girls: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log ("InformationPage: componentDidMount");
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/girl');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("InformationPage: status 200");
        this.setState({
          girls: xhr.response.girls 
        });
      }
      else {
        console.log("InformationPage: status: " + xhr.status);
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<Information girls={this.state.girls} />);
  }

}

export default InformationPage;
