import React from 'react';
import { Link } from "react-router-dom";
import './SignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import image from '../Assets/welcome.jpg'




const SignUp = () => {

    

  return (
    <div className='container'>
        <img alt="" height="270" src={image} width="360"/>
        <div className='heiader'>
            <div className='text'>Create your account</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Full Name' />
        </div>
        <div className='input'>
            <img src={email_icon} alt='' />
            <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password' />
        </div>
        <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Confirm Password' />
        </div>
       </div>
       
       <Link to="/dashboard" className="submit">Sign Up</Link>


       <div class="signin-link">Already have an account? <Link to="/login" className="Log In">Sign In</Link></div>
    </div>
  );
};

export default SignUp;

