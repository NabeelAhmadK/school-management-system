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
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <React.StrictMode>
        <Router basename={`/`}>
          <Switch>

            <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginComponent} />
            <Route path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgotPassword} />

            {currentUser !== null || authenticated ?
              <App>
                {
                  routes.map(route => {
                    return (
                      <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.component}
                      />
                    )
                  })
                }
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
