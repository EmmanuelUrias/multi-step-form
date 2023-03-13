import React from 'react'
import './Styles/YourInfo.css'

function YourInfo() {
  return (
    <div className='your-info-page'>
        <div className='title'>
            <h1>Personal Info</h1>
            <h3>Please provide your name, email address, and phone number.</h3>
        </div>
            <form className='info-form'>
                <label htmlFor="name-input" className="name-label">Name</label>
                <input id="name-input" type="text" className="name-input" />

                <label htmlFor="email-input" className="email-label">Email Address</label>
                <input id="email-input" type="email" className="email-input" />

                <label htmlFor="phone-input" className="phone-label">Phone Number</label>
                <input id="phone-input" type="text" className="phone-input" />
            </form>
    </div>
  )
}

export default YourInfo