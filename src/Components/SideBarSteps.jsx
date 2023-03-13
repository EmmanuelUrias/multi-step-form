import React from 'react'


function SideBarSteps(props) {
    const showPage = props.showPage

  return (
    <div>
        <div className="step-wrapper">
            <div className={showPage ? "number-bubble-highlighted" : "number-bubble"}>{props.id}</div>
            <div className="step-number">{props.step}</div>
            <div className="step-title">{props.title}</div>
        </div>
        <div className={showPage ? "step-page" : "hide"}>
            {props.page}
        </div>
    </div>
  )
}

export default SideBarSteps