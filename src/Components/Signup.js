import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createemp } from '../Redux/features/signupSlice'
import style from './Style/style.css'
import img2 from '../Components/Style/user.png'
import img1 from '../Components/Style/hotel2.png'

const Signup = (props) => {

  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = values;
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(createemp({ values }));
    setValues({ name: "", email: "", password: "" })
    navigate('/home')
  }



  return (
    <>
      <div className="container my-5 ">


        <div className='row shadow p-3 mb-5 bg-white rounded'>
          <div className='col-md-6 mx-1'>
            <img src={img1} />
            <div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
          </div>

          <div className='col-md-5 mx-1  my-4  '>

            <img className='image' src={img2} style={{ width: '27%' }} />
            <h2 className='center' style={{ color:"#873cb3" }}>Sign Up</h2>


            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">Name</label>
                <input type="text"  placeholder="Enter name " value={name} onChange={(e) => { setValues({ ...values, name: e.target.value }) }} id="form2Example1" className="form-control" />

              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example3">Email address</label>
                <input type="email"  placeholder="Enter email" value={email} onChange={(e) => { setValues({ ...values, email: e.target.value }) }} id="form2Example1" className="form-control" />
                
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example4">Password</label>
                <input type="password"  placeholder="Enter password" value={password} onChange={(e) => { setValues({ ...values, password: e.target.value }) }} id="form2Example2" className="form-control" />

              </div>

              <div className="container  text-center">
                <button type="button"  style={{ background: " #873cb3", color:"white" }}  onClick={handleclick} className="btn btn-light btn-block mb-4">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>


  )
}

export default Signup