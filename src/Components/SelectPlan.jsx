import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import NextStepBtn from './NextStepBtn'
import SideBarSteps from './SideBarSteps'
import './Styles/SelectPlan.css'

function SelectPlan() {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(true)
  const [showStep3, setShowStep3] = useState(false)
  const [showStep4, setShowStep4] = useState(false)

  const [selectedPlan, setSelectedPlan] = useState(null)

  const [isBlue, setIsBlue] = useState(true)
  
  const handleClick = (plan) => {
    setSelectedPlan(plan)
  }

   const handleClickOrUnclick = (blue, setBlue) => {
     setBlue(prevState => !prevState);
   }

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
    <div className='select-plan-page'>
      <div className='title'>
          <h1>Select your plan</h1>
          <h3>You have the option of monthly or yearly billing</h3>
      </div>
      <div className="options">
      <div className={`${selectedPlan === 'arcade' ? 'highlight' : 'plan'}`} onClick={() => handleClick('arcade')}>
          <img className='arcade-img' src='./images/icon-arcade.svg' alt='arcade icon'/>
          <h1>Arcade</h1>
          <h3>$9/mo</h3>
        </div>
        <div className={`${selectedPlan === 'advanced' ? 'highlight' : 'plan'}`} onClick={() => handleClick('advanced')}>
        <img className='advanced-img' src='./images/icon-advanced.svg' alt='advanced icon'/>
          <h1>Advanced</h1>
          <h3>$12/mo</h3>
        </div>
        <div className={`${selectedPlan === 'pro' ? 'highlight' : 'plan'}`} onClick={() => handleClick('pro')}>
        <img className='pro-img' src='./images/icon-pro.svg' alt='pro icon'/>
          <h1>Pro</h1>
          <h3>$15/mo</h3>
        </div>
      </div>
      <div className='toggle-switch'>
        <h1 className={isBlue ? 'toggle-switch-h1-blue' : 'toggle-switch-h1'}>Monthly</h1>
      <label class="switch">
       <input type="checkbox" onClick={() =>handleClickOrUnclick(isBlue, setIsBlue)}/>
        <span class="slider"></span>
      </label>
      <h1 className={isBlue ? 'toggle-switch-h1' : 'toggle-switch-h1-blue'}>Yearly</h1>   
     </div>
      <div className='go-back-btn'>
        <GoBackBtn />
      </div>
      <div className='next-btn'>
        <Link to='/add-ons'>
          <NextStepBtn />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default SelectPlan