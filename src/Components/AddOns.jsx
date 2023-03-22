import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NextStepBtn from './NextStepBtn'
import GoBackBtn from './GoBackBtn'
import SideBarSteps from './SideBarSteps'
import './Styles/AddOns.css'

function AddOns() {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(true)
  const [showStep4, setShowStep4] = useState(false)

  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);


  const handleClickOrUnclick = (addOn, setAddOn) => {
    setAddOn(prevState => !prevState);
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

    <div className='add-ons-page'>
      <div className='title-text'>
        <h1>Pick add-ons</h1>
        <h3>Add-ons help entrance your gaming experience</h3>
      </div>
      <div className='checklist'>
      <div className={`${onlineService ? 'container-highlight' : 'checklist-container'}`}>
          <input type='checkbox' id='checklist-1' name='online-service' onClick={() => handleClickOrUnclick(onlineService, setOnlineService)}/>
          <label className='checklist-container-text' htmlFor='checklist-1'>
            <h1>Online service</h1>
            <h3>Access to multiplayer games</h3>
          </label>
          <h2 className='price-1'>+$1/mo</h2>
        </div>
        <div className={`${largerStorage ? 'container-highlight' : 'checklist-container'}`}>
        <input type='checkbox' id='checklist-2' name='online-service'  onClick={() => handleClickOrUnclick(largerStorage, setLargerStorage)}/>
          <label className='checklist-container-text' htmlFor='checklist-2'>
            <h1>Larger storage</h1>
            <h3>Extra 1TB of cloud save</h3>
          </label>
          <h2 className='price-2'>+$2/mo</h2>
        </div>
        <div className={`${customProfile ? 'container-highlight' : 'checklist-container'}`}>
        <input type='checkbox' id='checklist-3' name='online-service' onClick={() => handleClickOrUnclick(customProfile, setCustomProfile)}/>
          <label className='checklist-container-text' htmlFor='checklist-3'>
            <h1>Customizable Profile</h1>
            <h3>Custom theme on your profile</h3>
          </label>
          <h2 className='price-3'>+$2/mo</h2>
        </div>
      </div>
      <div className='go-back-button'>
        <GoBackBtn />
      </div>
      <div className='next-button'>
        <Link to='/summary'>
          <NextStepBtn />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default AddOns