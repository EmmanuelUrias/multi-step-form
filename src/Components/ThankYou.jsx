import React from 'react'
import './Styles/ThankYou.css'

function ThankYou() {
  return (
    <div className='thank-you-page'>
      <div className='thank-you-icon'>
      <img src='./images/icon-thank-you.svg' alt='thank you icon'/>
      </div>
      <div className='thank-you-text'>
        <h1>Thank you!</h1>
        <h3>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</h3>
      </div>
    </div>
  )
}

export default ThankYou