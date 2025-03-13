export default function RegisterForm() {
  return (
    <form method='post' className='form form__register'>
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

        <label>Gender:</label><br/>
        <input type='radio' id='female' name='gender'/><label for='female'>Female</label><br/>
        <input type='radio' id='male' name='gender'/><label for='male'>Male</label><br/>
    </form>
  )
}
