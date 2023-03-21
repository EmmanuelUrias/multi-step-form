import React from 'react'
import './Styles/GoBackBtn.css'
import { useNavigate } from 'react-router-dom'

function GoBackBtn(props) {
  const previousPage = useNavigate()

  const handleClick = () => {
    previousPage(-1)
  }
  return (
      <button className='back-btn' onClick={handleClick}>
          Go Back
      </button>
  )
}

export default GoBackBtn