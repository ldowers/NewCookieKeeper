import React from 'react';
import Auth from '../modules/Auth';
import CookieInventory from '../components/CookieInventory.jsx';


class CookieInventoryPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      cookies: []
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log ("CookieInventoryPage: componentDidMount");
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/cookieInventory');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("CookieInventoryPage: status 200");
        this.setState({
          cookies: xhr.response.cookies
        });
      }
      else {
        console.log("Cookie Inventory Page: status: " + xhr.status);
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<CookieInventory cookies={this.state.cookies} />);
  }

}

export default CookieInventoryPage;
