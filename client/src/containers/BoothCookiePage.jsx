import React from 'react';
import Auth from '../modules/Auth';
import BoothCookie from '../components/BoothCookie.jsx';

class BoothCookiePage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            boothCookies: []
        };
    }

    /**
   * This method will be executed after initial rendering.
   */
    componentDidMount() {
        console.log("BoothCookiePage: componentDidMount");

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/boothCookie');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log("BoothCookiePage: status 200");
                this.setState({
                    boothCookies: xhr.response.boothCookies
                });
            }
            else {
                console.log("Booth Cookie Page: status: " + xhr.status);
            }
        });
        xhr.send();
    }


    /**
     * Render the component.
    */
    render() {
        return (<BoothCookie boothCookies={this.state.boothCookies}/>);
    }
}

export default BoothCookiePage;