
import './App.css';
import DashBoard from './component/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState(false);
  const showDashboardHandler = () =>{
    setShow(!show);
  }
  return (
    <div className = "main-container">
      <button className = "show-button" onClick = {showDashboardHandler}>Open Dashboard</button>
      {show && (
         <DashBoard showDashboardHandler ={showDashboardHandler} />
      )}
     
    </div>
  );
}

export default App;
