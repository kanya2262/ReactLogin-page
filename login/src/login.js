import React from 'react'
import Image  from "./image/Rectangle 48.jpg";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <header >
      {/* <img src={Image} alt='logo'/> */}
    <div className='form' >

      <div className="centered-button">
    <h1 className='in'>Login</h1>
</div>
        <div  className='formcontrol'>
            <label>username</label>
            <input className='in' type='text' placeholder='enter your username'/>
        </div>
        <div className='formcontrol'>
            <label>password</label>
            <input type='password' placeholder='enter your password'/>
        </div>


        <div className="centered-button">
        <button type="submit" className='btn'>submit</button>
    </div>
    <div className='centered'>OR</div>
    <div className='centered-button'>
      <Link to="/register"> 
    <button type="submit" className='btn'>Register Here</button>
    </Link> 
    </div>

    </div>
    </header>
  );
};


