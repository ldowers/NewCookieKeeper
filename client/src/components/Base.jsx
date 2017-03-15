import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Cookie Keeper</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (

        <div className="top-bar-right">
          <Link to="/information">Information</Link>
          <Link to="/cookieInventory">Cookie Inventory</Link>
          <Link to="/troopCookie">Troop Cookies</Link>
          <Link to="/girlCookie">Girl Scout Cookies</Link>
          <Link to="/boothCookie">Booth Cookies</Link>

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
