import React from 'react'

function NextStepBtn(props) {
    const id = props.id
    const showPage = props.showPage
    const steps = props.steps

    const nextStep = (steps) => {
        switch(steps){
            case id === 1: 
                steps[0].showPage = false
                steps[1].showPage = true
        }
    }
    console.log(steps)

    
  return (
    <div>
        <div className={showPage ? "next-step-btn" : "hide"}>
           <button onClick={nextStep}>
                Next Step
           </button>
        </div>
    </div>
  )
}

export default NextStepBtn