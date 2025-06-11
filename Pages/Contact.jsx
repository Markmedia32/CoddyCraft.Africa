import './Contact.css';

function Contact(){
  return (
    <div className="contact-page">
      <h1>Contact us</h1>
      <p>we'd love to hear from you. Fill out the form or reach us throught the details below.</p>

      <div className='contact-wrapper'>

        <div className='contact-form'>
          <form>
            <label htmlfor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Full Name" required />

            <label htmlfor="email">Email</label>
            <input type="email" id="email"  placeholder="Your Email" required />

            <label htmlfor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Your Message" required></textarea>

            <button type='submit'>Send Message</button>
          </form>
        </div>

        <div className='contact-details'>
          <h3>Reach Us</h3>
          <p><strong>Email:</strong>Support@coddycraft.africa</p>
          <p><strong>Phone:</strong>+254 700 335 442</p>
          <p><strong>Address:</strong>Nairobi, Kenya</p>
          <p><strong>Hours:</strong>Mon - Fri, 9:00Am - 5:00PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;