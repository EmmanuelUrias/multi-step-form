import SideBar from "./Components/SideBar";
import { Routes, Route } from 'react-router-dom'
import YourInfo from "./Components/YourInfo";
import SelectPlan from "./Components/SelectPlan";
import AddOns from "./Components/AddOns";
import Summary from "./Components/Summary";
import './App.css'

function App() {
  return (
    <div className="form-page">
      <SideBar />
      <Routes> 
        <Route path='/' exact element={<YourInfo />}/>
        <Route path='/select-plan' exact element={<SelectPlan />}/>
        <Route path='/add-ons' exact element={<AddOns />}/>
        <Route path='/summary' exact element={<Summary />}/>
      </Routes>
    </div>
  );
}

export default App;
