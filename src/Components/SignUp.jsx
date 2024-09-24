import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import image from '../Assets/welcome.jpg'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fullname,
        });
      }
      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className='container'>
        <img alt="" height="270" src={image} width="360"/>
        <div className='heiader'>
            <div className='text'>Create your account</div>
            <div className='underline'></div>
        </div>
        <form onSubmit={handleRegister}>
        <div className='inputs'>
        <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Full Name' value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required />
        </div>
        <div className='input'>
            <img src={email_icon} alt='' />
            <input type='email' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} value={email}
            required />
        </div>
        <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Confirm Password' />
        </div>  
       </div>
       </form>
       
       <button className="submit">Sign Up</button>

       <div className="signin-link">Already have an account? <Link to="/login" className="Log In">Sign In</Link></div>
    </div>
  );
};

export default SignUp;

