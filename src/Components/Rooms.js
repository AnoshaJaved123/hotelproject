import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRooms } from '../Redux/features/roomSlice'
import Navbar from "./Navbar";


function Rooms() {

  const [values, setValues] = useState({ name: "", member: "", roomnumber: "", roomtype: "Single Room", extradisp: "" });
  // eslint-disable-next-line
  const [showRooms, setshowRooms] = useState(false);

  // const { loading, rooms } = useSelector((state) => ({ ...state.appTwo }));

  const { name, member, roomtype, roomnumber, extradisp } = values;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRooms({ values }));
    setValues({ name: "", member: "", roomnumber: "", roomtype: "Single Room", extradisp: "" });
    setshowRooms(true);
    navigate('/home');
  };


  return (
    <>
      <Navbar />
      <div className='container align-items-center'>

        <div className='row my-4'></div>

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 shadow p-3 mb-5 bg-white rounded'>
          <div className="container text-center">

            <h4>Add Booking</h4>
          </div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1 my-2">Guest Name</label>
                <input value={name} onChange={(e) => setValues({ ...values, name: e.target.value })}  type="email" className="form-control my-2" placeholder="Enter Guest Name here"  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1 my-2">Total Member</label>
                <input value={member} onChange={(e) => setValues({ ...values, member: e.target.value })} type="Number" className="form-control my-2" placeholder="Enter total mumber of guests"  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1 my-2">Room Number</label>
                <input value={roomnumber} onChange={(e) => setValues({ ...values, roomnumber: e.target.value })} type="Number" placeholder="Enter room number"  className="form-control my-2" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1 my-2">Select Room</label>
                <select value={roomtype} onChange={(e) => setValues({ ...values, roomtype: e.target.value })} className="form-control my-2" placeholder="Select room type" >
                  <option>Single Room</option>
                  <option>Double Room</option>
                  <option>Family Room</option>
                  <option>Luxury Suite</option>
                </select>
              </div>



              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1 my-2">Extra Description</label>
                <textarea value={extradisp} onChange={(e) => setValues({ ...values, extradisp: e.target.value })} className="form-control my-2" id="exampleFormControlTextarea1" rows={3} placeholder="Enter any extra description" />
              </div>
              <div className="container text-center">
              <button onClick={handleSubmit} type="submit" style={{ background: " #873cb3", color: "white" }} className="btn btn-light my-3">Submit</button>

              </div>
            </form>
          </div>
        </div>


      </div>
    </>
  );
}

export default Rooms