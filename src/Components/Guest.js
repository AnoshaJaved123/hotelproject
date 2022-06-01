import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createGuests} from '../Redux/features/guestSlice'
import Navbar from "./Navbar";
import Spinner from "./Spinner";
const Guest = () => {
  const [values, setValues] = useState({ name: "", email: "",phone: "",cnic: "",status: "",room: "" });
  const [showGuest, setShowGuest] = useState(false);

 const { loading, guest } = useSelector((state) => ({ ...state.app }));

  const { name, email, phone, cnic, status, room} = values;
  const dispatch = useDispatch();
  let navigate = useNavigate();

   //handle post function
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGuests({ values }));
    setValues({ name: "", email: "",phone: "",cnic: "",status: "",room: "" });
    setShowGuest(true);
    navigate('/guests')
  };

  const showCreatedGuest = () => {
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">{guest[0].name}</h5>
              <p className="card-text">{guest[0].email}</p>
              <p className="card-text">{guest[0].phone}</p>
              <p className="card-text">{guest[0].cnic}</p>
              <p className="card-text">{guest[0].status}</p>
              <p className="card-text">{guest[0].room}</p>
              <i className="fa-solid fa-angles-left fa-2x text-end" onClick={()=>{navigate('/guests')}}></i>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>  
  <Navbar/>
    <div className="container ">
    <div className='row my-4'></div>
    <div className='row '>
    <div className='col-md-3'>
    </div>
    <div className='col-md-6  p-2 text-dark bg-opacity-10 shadow p-3 mb-5 bg-white rounded '>
    <div className="container text-center">
        <h2>Add Guest</h2>

    </div>
        <form >
        <div className="form-outline mb-4 ">
        <label className="form-label">Guest Name</label>
    <input  value={name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder="Enter Guest Name"  type="text" id="form2Example1" className="form-control" />
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input value={email} onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" id="form2Example1" placeholder="Enter email"  className="form-control" />
  </div>
  <div className="form-outline mb-4">
        <label className="form-label">Phone</label>
    <input value={phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} type="Number" id="form2Example1" placeholder="Enter Phone Number"  className="form-control" />
  </div>
  <div className="form-outline mb-4">
        <label className="form-label">CNIC</label>
    <input value={cnic} onChange={(e) => setValues({ ...values, cnic: e.target.value })} type="Number" id="form2Example1" placeholder="Enter ID Card Number"  className="form-control" />
  </div>
  <div className="form-outline mb-4">
        <label className="form-label">Room</label>
    <input value={room} onChange={(e) => setValues({ ...values, room: e.target.value })} type="Number" id="form2Example1" placeholder="Enter Room Number "  className="form-control" />
  </div>
  <div className="form-outline mb-4">
        <label className="form-label">Status</label>
    <input value={status} onChange={(e) => setValues({ ...values, status: e.target.value })} type="text" id="form2Example1" placeholder="Enter status of guest"  className="form-control" />
  </div>
  <div className="container text-center">
 
  <button style={{ background: " #873cb3", color:"white" }}onClick={handleSubmit} type="button" className="btn btn-light btn-block mb-4">Add Guest</button>

    </div>
  <div className="mt-4">{showGuest && <div>{showCreatedGuest()}</div>}</div>
</form>
        </div>
      </div>
    </div>
  </>

  )
}

export default Guest