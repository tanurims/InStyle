import React from 'react'
import './Welcomemsg.css'

const Welcomemsg = () => {
    const getTimeBasedMessage = () => {
        const currentHour = new Date().getHours();
        
        if (currentHour < 12) {
          return 'Good Morning! Start your day with the latest fashion trends.';
        } else if (currentHour < 18) {
          return 'Good Afternoon! Discover our exclusive afternoon collections.';
        } else {
          return 'Good Evening! Unwind with our stylish evening wear.';
        }
      };
    
      return (
        <div className="welcome-message">
          {getTimeBasedMessage()}
        </div>
      )
}

export default Welcomemsg
