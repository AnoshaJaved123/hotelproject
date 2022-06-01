import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createhk} from '../Redux/features/housekeepingSlice'
import Navbar from "./Navbar";



const HKform = () => {
  
  const housekeeping = useSelector(state => state.appThree.housekeeping)
  const [values, setValues] = useState({ name: "", status: "",room: ""});
  // const [showhk, setShowhk] = useState(false);
  const { name, status, room} = values;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handlehousekeeping = (e) => {
    e.preventDefault();
    dispatch(createhk({ values }));
    setValues({ name: "", status: "",room: ""});
    // setshowRooms(true);
    // navigate('/home')
  };

  return (
    <>
      <Navbar/>
    
    <div>
     <div className='container my-5'>
           <h3>Add New House Keeping</h3>
           <div className="row">
           <div className="col-md-3"></div>
               <div className="col-md-6">
               <form>
  <div className="form-group my-4">
    <label >House Keeping Name</label>
    <input value={name} onChange={(e) => setValues({ ...values, name: e.target.value })}  type="text" className="form-control"  />
  </div>
  <div className="form-group my-4">
    <label >Room Status</label>
    <input value={status} onChange={(e) => setValues({ ...values, status: e.target.value })}  type="text" className="form-control"  />
  </div>
  <div className="form-group my-4">
    <label>Room Number</label>
    <input value={room} onChange={(e) => setValues({ ...values, room: e.target.value })}  type="text" className="form-control" />
  </div>
  
  
  <div onClick={handlehousekeeping} className="btn btn-primary my-4" type="button"> Add</div>
</form>
               </div>
               <div className="col-md-3"></div>
           </div>
 

           </div> 

    </div>
      
    </>
  )
}

export default HKform