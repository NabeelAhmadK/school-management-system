import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({ sidebarCollapse, onSidebarCollapse }) => {
    return (
        <>
            <nav className={`side-bar-wrapper ${sidebarCollapse ? 'side-bar-collapse' : ''}`} >
                <ul className="side-bar-nav">
                    <div className="logo w-100">
                        <a href="#" className="nav-link">System</a>
                        <i className='bx bx-chevrons-left' onClick={onSidebarCollapse}></i>
                    </div>

                    {/* TODO: PROFILE DIV */}
                    <li className="side-nav-item">
                        <NavLink to="/app/dashboard" className="d-flex" activeClassName="active">
                            <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Dashboard</span>
                        </NavLink >
                    </li>
                    <li className="side-nav-item">
                        <a className="d-flex" >
                            <box-icon name='chalkboard' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Faculty Management</span>
                            <i class='bx bx-caret-down'></i>
                        </a>
                    </li>
                    <li className="side-nav-item">
                        <a className="d-flex" >
                            <box-icon name='graduation' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Student Management</span>
                            <i class='bx bx-caret-down'></i>
                        </a>
                    </li>
                    <li className="side-nav-item">
                        <a href="#" className="d-flex">
                            <box-icon name='book-content' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Examination</span>
                            <i class='bx bx-caret-down'></i>
                        </a>
                    </li>
                    <li className="side-nav-item">
                        <a href="#" className="d-flex">
                            <box-icon name='dollar-circle' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Fees Management</span>
                            <i class='bx bx-caret-down'></i>
                        </a>
                    </li>
                    <li className="side-nav-item">
                        <a href="#" className="d-flex">
                            <box-icon name='bar-chart-alt-2' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Reports</span>
                            <i class='bx bx-caret-down'></i>
                        </a>
                    </li>
                    <li className="side-nav-item">
                        <a href="#" className="d-flex">
                            <box-icon name='user-account' type='solid' color='#ffffff' ></box-icon>
                            <span className="ml-2">Account Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default SideBar
