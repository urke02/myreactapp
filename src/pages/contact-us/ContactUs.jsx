export default function ContactUs() {
  return (
    <section className="section py-12">
      <div className="container">
        <h1  className='h1'>Contact Us</h1>

        <form method='post' className='forma'>
          <label for='name'>Name:</label><br/>
          <input type='text' id='name' name='name' placeholder='write your name'/><br/>

          <label for='email'>Email:</label><br/>
          <input type='email' id='email' name='email' placeholder='write your email'/><br/>

          <label for='message'>Message:</label><br/>
          <textarea id='message' name='message' placeholder='write message'></textarea>
        </form>
      </div>
    </section>
  )
}
