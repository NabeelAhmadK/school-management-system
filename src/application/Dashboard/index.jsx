import React, { useState } from 'react'
import Tiles from '../../components/Tiles'

const Dashboard = props => {

    const [userData, setUserData] = useState({
        first_name: "Nabeel",
        last_name: "Ahmad Khan"
    })

    return (
        <>
            <div className="dashboard-title-text mb-5">
                <h5>Hello <span className="text-danger">{userData.first_name}</span>, Welcome Back</h5>
                <p className="text-muted">Very detailed & featured admin</p>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Tiles
                        counters="75"
                        counterTitle="Students"
                        cardType="student"
                    />
                </div>
                <div className="col-md-3">
                    <Tiles
                        counters="25"
                        counterTitle="Teachers"
                        cardType="teacher"
                    />
                </div>
                <div className="col-md-3">
                    <Tiles
                        counters="Rs. 150,000"
                        counterTitle="Total Earnings"
                        cardType="total-earnings"
                    />
                </div>
                <div className="col-md-3">
                    <Tiles
                        counters="Rs. 25,000"
                        counterTitle="Fees Dues"
                        cardType="fees-dues"
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
