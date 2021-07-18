import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { routes } from '../route';

import Login from '../authentication/Login';
import SideBar from "./side-navbar";
import TopBar from "./top-navbar";

const App = ({ children }) => {

  const [sidebarCollapse, setSidebarCollapse] = useState(false)

  const collapseSidebar = () => {
    setSidebarCollapse(!sidebarCollapse)
  }
  return (
    <>
      <div className="page-wrapper" id="pageWrapper">
        <TopBar />
        <div className="page-body-wrapper sidebar-icon">
          <SideBar
            sidebarCollapse={sidebarCollapse}
            onSidebarCollapse={collapseSidebar}
          />
          <div className={`page-body ${sidebarCollapse ? 'side-bar-collapsed' : ''}`} >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
