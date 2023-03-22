// import React from 'react'
// import SideBarSteps from './SideBarSteps'
// import YourInfo from './YourInfo'
// import SelectPlan from './SelectPlan'
// import AddOns from './AddOns'
// import Summary from './Summary'
// import NextStepBtn from './NextStepBtn'
// import GoBackBtn from './GoBackBtn'

// function SideBar() {
//     let steps = [
//         {
//             id: 1,
//             step: 'STEP 1',
//             title: 'YOUR INFO',
//             path: '/',
//             showPage: true
//         },
//         {
//             id: 2,
//             step: 'STEP 2',
//             title: 'SELECT PLAN',
//             path: '/select-plan',
//             showPage: false

//         },
//         {
//             id: 3,
//             step: 'STEP 3',
//             title: 'ADD-ONS',
//             path: '/add-ons',
//             showPage: false
//         },
//         {
//             id: 4,
//             step: 'STEP 4',
//             title: 'SUMMARY',
//             path: '/summary',
//             showPage: false
//         }
//     ]

//     function toggleSteps(id) {
//         let prevIndex = -1
//         const updatedSteps = steps.map((step, index) => {
//           if (step.id === id) {
//             return {
//               ...step,
//               showPage: !steps.showPage
//             };
//           } else if(prevIndex === index - 1){
//             prevIndex = index
//             return {
//                 ...step,
//                 showPage: false
//             }
//           }
//           return step;
//         });
//         return updatedSteps;
//       }

//       const updatedSteps = toggleSteps(2)
//       console.log(updatedSteps)

//   return (
//         <div className='side-bar'>
//         {steps.map(steps => (
//             <div>
//                 <SideBarSteps 
//                     key={steps.id}
//                     id={steps.id}
//                     step={steps.step}
//                     title={steps.title}
//                     path={steps.path}
//                     showPage={updatedSteps.showPage}
//                 />
//             </div>                
//         ))}
//         </div>
//   )
// }

// export default SideBar