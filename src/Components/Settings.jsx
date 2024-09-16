import React from 'react';
import './Settings.css'


const Settings = () => {
  return (
    <div className='container'>
       <div class="header">
         <h2>Settings</h2>
         </div>
         <div class="section">
    <div class="section-title">
     Account
    </div>
    <div class="item">
        <div>Edit Profile</div>
    </div>
    <div class="item">
        <div>Full Name</div>
    </div>
    <div class="item">
        <div>Email</div>
    </div>
    <div class="item">
        <div>Currency</div>
    </div>
    <div class="item">
        <div>Change Password</div>
    </div>
    <div class="item">
        <div>Forgot Password</div>
    </div>
    </div>
    <button class="logout-button">
    Log Out
   </button>
        
    </div>
  );
};

export default Settings;

