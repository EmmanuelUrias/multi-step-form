import React from 'react'
import SideBarSteps from './SideBarSteps'
import YourInfo from './YourInfo'
import SelectPlan from './SelectPlan'
import AddOns from './AddOns'
import Summary from './Summary'

function SideBar() {
    let steps = [
        {
            id: 1,
            step: 'STEP 1',
            page: <YourInfo />,
            title: 'YOUR INFO',
            showPage: true
        },
        {
            id: 2,
            step: 'STEP 2',
            page: <SelectPlan />,
            title: 'SELECT PLAN',
            showPage: false

        },
        {
            id: 3,
            step: 'STEP 3',
            page: <AddOns />,
            title: 'ADD-ONS',
            showPage: false
        },
        {
            id: 4,
            step: 'STEP 4',
            page: <Summary />,
            title: 'SUMMARY',
            showPage: false
        }
    ]

  return (
    <div>
        {steps.map(steps => (
            <SideBarSteps 
                id={steps.id}
                step={steps.step}
                page={steps.page}
                title={steps.title}
                showPage={steps.showPage}
            />
        ))}
    </div>
  )
}

export default SideBar