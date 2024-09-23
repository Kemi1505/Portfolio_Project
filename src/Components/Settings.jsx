import React from 'react';
import './Settings.css'


const Settings = () => {
  return (
    <div className='container'>
       <div className="header">
         <h2>Settings</h2>
         </div>
         <div className="section">
    <div className="section-title">
     Account
    </div>
    <div className="item">
        <div>Edit Profile</div>
    </div>
    <div className="item">
        <div>Full Name</div>
    </div>
    <div className="item">
        <div>Email</div>
    </div>
    <div className="item">
        <div>Currency</div>
    </div>
    <div className="item">
        <div>Change Password</div>
    </div>
    <div className="item">
        <div>Forgot Password</div>
    </div>
    </div>
    <button className="logout-button">
    Log Out
   </button>
        
    </div>
  );
};

export default Settings;

