import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <header>
    <div className='form'>

      <div className="centered-button">
    <h1>Registration Form</h1>
</div>
        <div  className='formcontrol'>
            <label>Name</label>
            <input type='text' placeholder='enter your name'/>
        </div>
        <div className='formcontrol'>
            <label>Email ID</label>
            <input type='password' placeholder='enter your Email ID'/>
        </div>

        <div className='formcontrol'>
            <label>Mobile No.</label>
            <input type='password' placeholder='enter your Mobile No.'/>
        </div>

        <div className='formcontrol'>
            <label>password</label>
            <input type='password' placeholder='enter your password'/>
        </div>


        <div className="centered-button">
        <button type="submit" className='btn'>Register</button>
    </div>
    <div className='centered'>OR</div>
    <Link to="/"> 

    <div className='centered-button'>
    <button type="submit" className='btn'>Back to Login</button>

</div>
</Link>
    </div>
    </header>
  );
};



    