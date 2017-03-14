import React from 'react';
import Auth from '../modules/Auth';
import TroopCookie from '../components/TroopCookie.jsx';

class TroopCookiePage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            troopCookies: []
        };
    }

    /**
   * This method will be executed after initial rendering.
   */
    componentDidMount() {
        console.log("TroopCookiePage: componentDidMount");

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/troopCookie');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log("TroopCookiePage: status 200");
                this.setState({
                    troopCookies: xhr.response.troopCookies
                });
            }
            else {
                console.log("Troop Cookie Page: status: " + xhr.status);
            }
        });
        xhr.send();
    }


    /**
     * Render the component.
    */
    render() {
        return (<TroopCookie troopCookies={this.state.troopCookies}/>);
    }
}

export default TroopCookiePage;