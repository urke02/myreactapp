import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <div>
        <h1  className='headingText'>Contact Us</h1>
      </div>

      <div>
        <form method='post' className='forma'>

            <label for='name'>Name:</label><br/>
            <input type='text' id='name' name='name' placeholder='write your name'/><br/>

            <label for='email'>Email:</label><br/>
            <input type='email' id='email' name='email' placeholder='write your email'/><br/>

            <label for='message'>Message:</label><br/>
            <textarea id='message' name='message' placeholder='write message'></textarea>

        </form>
      </div>
    </div>
  )
}
