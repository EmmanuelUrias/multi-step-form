import React, { useState } from 'react'
import NextStepBtn from './NextStepBtn'
import './Styles/YourInfo.css'
import { Link } from 'react-router-dom'
import SideBarSteps from './SideBarSteps'

function YourInfo() {
  const [showStep1, setShowStep1] = useState(true)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)
  const [showStep4, setShowStep4] = useState(false)

  return (
    <div className='form-page'>
      <div>
        <SideBarSteps
         showStep1 = {showStep1}
         showStep2 = {showStep2}
         showStep3 = {showStep3}
         showStep4 = {showStep4}
         />
      </div>
    <div className='your-info-page'>
        <div className='title'>
            <h1>Personal Info</h1>
            <h3>Please provide your name, email address, and phone number.</h3>
        </div>
            <form className='info-form'>
                <label htmlFor="name-input" className="name-label">Name</label>
                <input id="name-input" type="text" className="name-input"  placeholder='First Last' required="The field is required"/>

                <label htmlFor="email-input" className="email-label">Email Address</label>
                <input id="email-input" type="email" className="email-input" placeholder='example@email.com' required="The field is required"/>

                <label htmlFor="phone-input" className="phone-label">Phone Number</label>
                <input id="phone-input" type="text" className="phone-input" placeholder='e.g. +1 234 567 890' required="The field is required"/>
                {/* <input type='submit'/> */}
            </form>
            <div className='next-page-btn'>
              <Link to='/select-plan'>
                <NextStepBtn />
              </Link>
            </div>
    </div>
    </div>
  )
}

export default YourInfo