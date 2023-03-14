import React from 'react'
import './Styles/GoBackBtn.css'

function GoBackBtn(props) {
    const showPage = props.showPage
    const steps = props.steps

    const goBack = (steps) => {
        const currentStepIndex = steps.findIndex(step => step.showPage);
        if (currentStepIndex !== -1 && currentStepIndex > 0) {
          const updatedSteps = [...steps];
          updatedSteps[currentStepIndex].showPage = false;
          updatedSteps[currentStepIndex - 1].showPage = true;
          return updatedSteps;
        }
        return steps;
    }

  return (
    <div>
        <div className={showPage ? "next-step-btn" : "hide"}>
           <button onClick={goBack}>
                Go Back
           </button>
        </div>
    </div>
  )
}

export default GoBackBtn