import React from 'react';
import './Settings.css'
import { Link } from "react-router-dom";

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
    
   <Link to="/login" className="logout-button"><button>Log Out</button></Link>
        
    </div>
  );
};

export default Settings;

