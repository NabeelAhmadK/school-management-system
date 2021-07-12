import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = (props) => {

    return (
        <>
            <div className="side-bar-wrapper">
                <Link to="/app/dashboard" className="btn btn-link" >Dashboard</Link>
                <Link to="/app/manage/student" className="btn btn-link" >Student</Link>
            </div>
        </>

    )
}

export default SideBar
