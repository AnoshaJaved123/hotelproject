import React from 'react'
import Home from "./Components/Home";
import Guest from "./Components/Guest"

import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import GuestItem from "./Components/GuestItem";
import Rooms from "./Components/Rooms";
import HouseKeeping from "./Components/HouseKeeping";
import Bill from "./Components/Bill";
import Logintwo from './Components/Logintwo'
import Signup from './Components/Signup'
import Calender from './Components/Calender'

function App() {
  
      return (
        <Router>
        
       
        <Routes>
      <Route exact path="/" element={<Logintwo/>}></Route>

        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/rooms" element={<Rooms/>}></Route>
        <Route exact path="/guests" element={<GuestItem/>}></Route>
        <Route exact path="/createguest" element={<Guest/>}></Route>
        <Route exact path="/housekeeping" element={<HouseKeeping/>}></Route>
        <Route exact path="/bill" element={<Bill/>}></Route>
        <Route exact path='/Logintwo' element={<Logintwo/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path="/cal" element={<Calender/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
