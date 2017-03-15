import React from 'react';
import Auth from '../modules/Auth';
import GirlScout from '../components/GirlScout.jsx';

class GirlScoutPage extends React.Component {

    /**
   * Class constructor.
   */
    constructor(props) {
        super(props);

        this.state = {
            girlCookies: []
        };
    }

    /**
   * This method will be executed after initial rendering.
   */
    componentDidMount() {
        console.log("GirlScout Page: componentDidMount");

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/girlCookie');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log("GirlScoutPage: status 200");
                this.setState({
                    girlCookies: xhr.response.girlCookies
                });
            }
            else {
                console.log("GirlScout Page: status: " + xhr.status);
            }
        });
        xhr.send();
    }


    /**
     * Render the component.
    */
    render() {
        return (<GirlScout girlCookies={this.state.girlCookies}/>);
    }
}

export default GirlScoutPage;