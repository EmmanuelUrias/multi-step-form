import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Styles/SideBarSteps.css'
import './Styles/SideBar.css'



function SideBarSteps(props) {
    const showStep1 = props.showStep1
    const showStep2 = props.showStep2
    const showStep3 = props.showStep3
    const showStep4 = props.showStep4

  return (
    <div className='side-bar'>
    <div className='steps-page'>
        <div className="step-wrapper">
            <div className={showStep1 ? "number-bubble-highlighted" : "number-bubble"}>
              <div className='number'>
              1
              </div>
            </div>
            <div className='text-container'>
              <div className="step-number">STEP 1</div>
              <div className="step-title">YOUR INFO</div>
            </div>
        </div>
    </div>
    <div className='steps-page'>
        <div className="step-wrapper">
            <div className={showStep2 ? "number-bubble-highlighted" : "number-bubble"}>
              <div className='number'>
              2
              </div>
            </div>
            <div className='text-container'>
              <div className="step-number">STEP 2</div>
              <div className="step-title">SELECT PLAN</div>
            </div>
        </div>

    </div>
    <div className='steps-page'>
        <div className="step-wrapper">
            <div className={showStep3 ? "number-bubble-highlighted" : "number-bubble"}>
              <div className='number'>
              3
              </div>
            </div>
            <div className='text-container'>
              <div className="step-number">STEP 2</div>
              <div className="step-title">ADD-ONS</div>
            </div>
        </div>

    </div>
    <div className='steps-page'>
        <div className="step-wrapper">
            <div className={showStep4 ? "number-bubble-highlighted" : "number-bubble"}>
              <div className='number'>
              4
              </div>
            </div>
            <div className='text-container'>
              <div className="step-number">STEP 4</div>
              <div className="step-title">SUMMARY</div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default SideBarSteps