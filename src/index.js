import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'boxicons'
import './assets/scss/app.scss';

import LoginComponent from './authentication/Login';
import ForgotPassword from './authentication/Forgot-Password';
import App from './components/App';

const Root = () => {
  const nodeRef = React.useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(true);
  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || 'fade';

  useEffect(() => {
    setAnim(animation);
    setAuthenticated(true);

    return function cleanup() {

    }

  }, []);

  return (
    <>
      <React.StrictMode>
        <Router basename={`/`}>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginComponent} />
            <Route path={`${process.env.PUBLIC_URL}/auth/forgot-password`} component={ForgotPassword} />

            {currentUser !== null || authenticated ?
              <App>
                <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                  return (<Redirect to={`${process.env.PUBLIC_URL}/app/dashboard`} />)
                }} />

                <TransitionGroup>
                  {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={`${process.env.PUBLIC_URL}${path}`}>
                      {({ match }) => (
                        <>
                          <CSSTransition
                            in={match != null}
                            timeout={1}
                            classNames={anim}
                            unmountOnExit
                            nodeRef={nodeRef}
                          >
                            <div ref={nodeRef}><Component /></div>
                          </CSSTransition>
                        </>
                      )}
                    </Route>
                  ))}
                </TransitionGroup>
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
