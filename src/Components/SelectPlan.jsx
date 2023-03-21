import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import NextStepBtn from './NextStepBtn'
import './Styles/SelectPlan.css'

function SelectPlan() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  
  const handleClick = (plan) => {
    setSelectedPlan(plan)
  }

  return (
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
        <h1>Monthly</h1>
      <label class="switch">
       <input type="checkbox" />
        <span class="slider"></span>
      </label>
      <h1>Yearly</h1>   
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
  )
}

export default SelectPlan