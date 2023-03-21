import React, { useState } from 'react'
import GoBackBtn from './GoBackBtn'
import NextStepBtn from './NextStepBtn'
import './Styles/Summary.css'
import ThankYou from './ThankYou'

function Summary() {
  const [isConfirmed, setIsComfirmed] = useState(false)

  const handleClick = () => {
    setIsComfirmed(true)
  }

  return (
    <div className='summary-page'>
      <div className='title-info'>
        <h1>Finishing up</h1>
        <h3>Double-check everything looks OK before confirming.</h3>
      </div>
      <div className="total-price">
        <div className='plan-summary'>
            <div className='plan-selection'>
                <h1>Arcade(monthly)</h1>
                <a>Change</a>
            </div>
            <h2>
              $9/mo
            </h2>
        </div>
        <div className='border-line'></div>
        <div className="summary-add-on">
          <h1>online service</h1>
          <h2 className='summary-add-on-price-1'>+$1/mo</h2>
        </div>
        <div className="summary-add-on">
        <h1>larger storage</h1>
          <h2 className='summary-add-on-price-2'>+$2/mo</h2>
        </div>
      </div>
        <div className="price-summary">
            <h1>Total (per month)</h1>
            <h2>+$12/mo</h2>
        </div>
      <div className='summary-back-btn'>
        <GoBackBtn />
      </div>
      <div className='summary-confirm-btn'>
        <button>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Summary