import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/"><img className = "gs-logo" src = "/img/gs-logo.png" /> Cookie Keeper</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (

        <div className="top-bar-right">
          {/*<Link to="/information">Information</Link>
          <Link to="/cookieInventory">Cookie Inventory</Link>*/}
          <Link to="/troopCookie">Troop</Link>
          <Link to="/girlCookie">Girl Scouts</Link>
          <Link to="/boothCookie">Booth</Link>
           <Link to="/inventoryTotal">Inventory</Link>

          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
