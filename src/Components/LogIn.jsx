import React from 'react';
import { Link } from "react-router-dom";
import './SignUp.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import image from '../Assets/welcome.jpg'




const LogIn = () => {

    

  return (
    <div className='container'>
        <img alt="" height="270" src={image} width="360"/>
        <div className='heiader'>
            <div className='text'>Hello,</div>
            <div className='text'>Welome Back!</div>

        </div>
        <div className='inputs'>
        <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Full Name' />
        </div>
        
        <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password' />
        </div>
        
       </div>
       <Link to="/dashboard" className="submit">Sign In</Link>

       <div class="signin-link">Don't have an account?  <Link to="/signup" className="Log In">Sign Up</Link></div>
    </div>
  );
};


export default LogIn;