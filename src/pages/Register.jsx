import React from 'react'

export default function Register() {
  return (
    <div>
      <div>
        <h1 className='headingText'>Register</h1>
      </div>
      <div>
        <form method='post' className='forma'>

            <label for='firstName'>First Name:</label><br/>
            <input type='text' id='firstName' name='firstName' placeholder='write your first name'/><br/>
            
            <label for='lastName'>Last Name:</label><br/>
            <input type='text' id='lastName' name='lastName' placeholder='write your last name'/><br/>

            <label for='phoneNumber'>Phone Number:</label><br/>
            <input type='number' id='phoneNumber' name='phoneNumber' placeholder='write your phone number'/><br/>

            <label for='email'>Email:</label><br/>
            <input type='email' id='email' name='email' placeholder='write your email'/><br/>

            <label for='age'>Age:</label><br/>
            <input type='number' id='age' name='age' placeholder='write your age'/><br/>

            <label>Prevoz:</label><br/>
            <input type='radio' id='sopstveniPrevoz' name='gender'/><label for='sopstveniPrevoz'>sopstveni prevoz</label><br/>
            <input type='radio' id='autobus' name='gender'/><label for='autobus'>autobus</label><br/>

        </form>
      </div>
    </div>
  )
}
