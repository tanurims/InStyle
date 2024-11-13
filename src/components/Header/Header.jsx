import React from 'react'
import './Header.css'
import Welcomemsg from '../Welcomemsg/Welcomemsg'

const Header = () => {
  return (
    <>
    
    <div className='header'>
    <Welcomemsg/>
      <div className="header-contents">
        <h2>New Arrivals this Spring Season</h2>
        <p>Spring has arrived,we come with fashion choices that are suitable to be combined with this season,lots of formal and informal cloths</p>
        <button>Style Now</button>
      </div>
    </div>
    </>
    
  )
}

export default Header
