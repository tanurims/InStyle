import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="background">
        <h1>About Us</h1>
        <p>Welcome to InStyle! We are an online fast fashion brand that brings you weekly fashion and styles. Our Fashion lines are for the modern day women of all ages who seek on trend, of the moment fashion with a glamorous and unique edge at affordable prices. </p>
        <br/>
        <p>Whether you are looking for the perfect dress, dazzling party wear, smart office wear or casual day fashion, InStyle has everything you need for a complete stylish modern lifestyle.</p>
      </div>

      <div className="follow">
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
  )
}

export default AboutUs
