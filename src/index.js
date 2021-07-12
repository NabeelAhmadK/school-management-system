import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/scss/app.scss';

import LoginComponent from './authentication/Login';
import ForgotPassword from './authentication/Forgot-Password';
import App from './components/App';

const Root = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <React.StrictMode>
        <Router basename={`/`}>
          <Switch>

            <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginComponent} />
            <Route path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgotPassword} />

            {currentUser !== null || authenticated ?
              <App>
                <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                  return (<Redirect to={`${process.env.PUBLIC_URL}/app`} />)
                }} />

                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={`${process.env.PUBLIC_URL}${path}`}>
                    {({ match }) => (
                      <div><Component /></div>
                    )}
                  </Route>
                ))}
              </App>
              :
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            }
          </Switch>
        </Router>
      </React.StrictMode>
    </>
  )
}

ReactDOM.render(<Root />,
  document.getElementById('root')
);
