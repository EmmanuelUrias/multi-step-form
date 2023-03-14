import React from 'react'
import './Styles/FormPage.css'

function FormPage(props) {
    const showPage = props.showPage
    
  return (
    <div>
        <div className={showPage ? "step-page" : "hide"}>
            {props.page}
        </div>
    </div>
  )
}

export default FormPage