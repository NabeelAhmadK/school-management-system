import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { routes } from '../route';

import Login from '../authentication/Login';
import SideBar from "./side-navbar";
import TopBar from "./top-navbar";

const App = ({ children }) => {
  return (
    <>
      <div className="page-wrapper" id="pageWrapper">
        <TopBar />
        <div className="page-body-wrapper sidebar-icon">
          <SideBar />
          <div className="page-body">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
