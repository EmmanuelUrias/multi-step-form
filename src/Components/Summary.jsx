import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import SideBarSteps from './SideBarSteps'
import './Styles/Summary.css'
import ThankYou from './ThankYou'

function Summary() {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)
  const [showStep4, setShowStep4] = useState(true)

  const [isConfirmed, setIsComfirmed] = useState(false)

  const handleClick = () => {
    setIsComfirmed(true)
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
    <div className='summary-thankyou-page'>
      { isConfirmed ? <ThankYou /> :
          <div className='summary-page'>
            <div className='title-info'>
       <h1>Finishing up</h1>
       <h3>Double-check everything looks OK before confirming.</h3>
     </div>
     <div className="total-price">
       <div className='plan-summary'>
           <div className='plan-selection'>
               <h1>Arcade(monthly)</h1>
               <Link to='/select-plan'>
                <a>Change</a>
               </Link>
           </div>
           <h2>
             $9/mo
           </h2>
       </div>
       <div className='border-line'></div>
       <div className="summary-add-on">
         <h1>Online service</h1>
         <h2 className='summary-add-on-price-1'>+$1/mo</h2>
       </div>
       <div className="summary-add-on">
       <h1>Larger storage</h1>
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
       <button onClick={handleClick}>
         Confirm
       </button>
     </div>
    </div>}
  </div>
    </div>
  )
}

export default Summary