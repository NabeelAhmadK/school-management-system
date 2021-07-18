import React from 'react'
import profilePicture from '../../assets/images/nabeel.jpg'

const Profile = ({ sidebarCollapsed }) => {
    return (
        <>
            <div className={`profile-layout ${sidebarCollapsed ? 'profile-collapsed' : ''}`}>
                <img src={profilePicture} className="profile-image" />
                <div className="profile-info">
                    <p>Nabeel Ahmad</p>
                    <p>Admin</p>
                </div>
            </div>
        </>
    )
}

export default Profile;