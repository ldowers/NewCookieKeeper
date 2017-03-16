import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import InformationPage from './containers/InformationPage.jsx';
import CookieInventoryPage from './containers/CookieInventoryPage.jsx';
import TroopCookiePage from './containers/TroopCookiePage.jsx';
import GirlCookiePage from './containers/GirlCookiePage.jsx';
import BoothCookiePage from './containers/BoothCookiePage.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/information',
      getComponent: (location, callback) => {
        callback(null, InformationPage);
      }
    },

    {
      path: '/cookieInventory',
      getComponent: (location, callback) => {
        callback(null, CookieInventoryPage);
      }
    },

    {
      path: '/troopCookie',
      getComponent: (location, callback) => {
        callback(null, TroopCookiePage);
      }
    },
    {
      path: '/girlCookie',
      getComponent: (location, callback) => {
        callback(null, GirlCookiePage);
      }
    },
    {
      path: '/boothCookie',
      getComponent: (location, callback) => {
        callback(null, BoothCookiePage);
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
