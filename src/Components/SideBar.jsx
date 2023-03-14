import React from 'react'
import SideBarSteps from './SideBarSteps'
import YourInfo from './YourInfo'
import SelectPlan from './SelectPlan'
import AddOns from './AddOns'
import Summary from './Summary'
import './Styles/SideBar.css'
import NextStepBtn from './NextStepBtn'
import GoBackBtn from './GoBackBtn'

function SideBar() {
    let steps = [
        {
            id: 1,
            step: 'STEP 1',
            title: 'YOUR INFO',
            showPage: true
        },
        {
            id: 2,
            step: 'STEP 2',
            title: 'SELECT PLAN',
            showPage: false

        },
        {
            id: 3,
            step: 'STEP 3',
            title: 'ADD-ONS',
            showPage: false
        },
        {
            id: 4,
            step: 'STEP 4',
            title: 'SUMMARY',
            showPage: false
        }
    ]

  return (
        <div className='side-bar'>
        {steps.map(steps => (
            <div>
                <SideBarSteps 
                    id={steps.id}
                    step={steps.step}
                    title={steps.title}
                    showPage={steps.showPage}
                />
            </div>                
        ))}
        </div>
  )
}

export default SideBar