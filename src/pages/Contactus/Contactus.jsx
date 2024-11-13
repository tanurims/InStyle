import React from 'react'
import './Contactus.css'
import { assets } from '../../assets/assets'

const Contactus = () => {
  return (
    <div className='contact-us'>
      <div className="contact-container">
        <div className="contact-info" style={{ backgroundImage: `url(${assets.contact1})` }}>
          <div className="info-content">
            <h2>Feel Free To Contact Us</h2>
            <ul>
              <li>
                <img src={assets.location} alt=''/>
                <p>StyleIn, Bakers Road, Colombo 5</p>
              </li>
              <li>
                <img src={assets.phone} alt=''/>
                <p>011-852-62-32</p>
              </li>
              <li>
                <img src={assets.email} alt=''/>
                <p>stylein@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="follow-us">
            <h2>Follow Us On</h2>
            <div className="social-icon">
              <a href="https://www.facebook.com" target='blank'>
                <img src={assets.facebook} alt=''/>
              </a>
              <a href="https://www.insagram.com" target='blank'>
                <img src={assets.instagram} alt=''/>
              </a>
              <a href="https://www.pinterest.com" target='blank'>
                <img src={assets.pinterest} alt=''/>
              </a>
            </div>
        </div>
        </div>

        <form className='contact-form'>
          <h2>Get In Touch</h2>
          <div className="form-group">
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' placeholder='Enter your name' required/>
          </div>
          <div className="form-group">
              <label htmlFor='email'>Email:</label>
              <input type='email' id='name' name='email' placeholder='Enter your email' required/>
          </div>
          <div className="form-group">
              <label htmlFor='message'>Send Message:</label>
              <textarea type='text' id='name' name='name' placeholder='Tell us' required/>
          </div>
          <button type='submit'>Send Now</button>
        
      </form>
      </div>

      

      
    </div>
  )
}

export default Contactus
