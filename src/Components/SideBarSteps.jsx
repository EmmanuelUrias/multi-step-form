import React, { useEffect, useState } from 'react'
import './Styles/SideBarSteps.css'


function SideBarSteps(props) {
    const showPage = props.showPage
    const key = props.id

  return (
    <div className='steps-page' key={key}>
        <div className="step-wrapper">
            <div className={showPage ? "number-bubble-highlighted" : "number-bubble"}>
              <div className='number'>
              {props.id}
              </div>
            </div>
            <div className='text-container'>
              <div className="step-number">{props.step}</div>
              <div className="step-title">{props.title}</div>
            </div>
        </div>

    </div>
  )
}

export default SideBarSteps