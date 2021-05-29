import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff'
import Login from './components/auth/Login';
//import Protected from './components/auth/Protected';
import { oktaAuthConfig, oktaSignInConfig } from './components/auth/config';

import Navbar from './components/layout/Navbar';



/*function onAuthRequired({ history }) {
  history.push('/login');
}*/

const oktaAuth = new OktaAuth(oktaAuthConfig);

const SignIn = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };
  
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    > 
    <div className ="SignIn"> 
     <Navbar />
     <div className ="container">
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <SecureRoute path="/staff" exact={true} component={Staff} />
        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} />
      </Switch>
      </div>
    </div>
  </Security>
  );
};
export default SignIn;




/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';


function onAuthRequired({ history }) {
  history.push('/login');
}

export const SignIn = () => {
  return (
    <Router>
    <Security
      issuer="https://dev-13218222.okta.com/oauth2/default"
      client_id="0oatxtwkjWCGFNMsY5d6"
      redirect_uri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
    >
      <div className="SignIn">
        <Navbar />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <SecureRoute path="/staff" exact={true} component={Staff} />
          <Route
            path="/login"
            render={() => (
              <Login baseUrl="https://dev-13218222.okta.com" />
            )}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </div>
      </div>
    </Security>
  </Router>
);
            }


export default SignIn;*/