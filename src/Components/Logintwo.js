import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img2 from '../Components/Style/user.png'
import img1 from '../Components/Style/hotel2.png'


const Logintwo = (props) => {
  // const notify = () => toast("Wow so easy!");

  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5003/api/employeeAuth//login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/home');

    } else {
      toast("Invalid Credentials...");
      // notify()
      //  alert("Invalid Credentials...")
      // setAlert("warning","enter with correct credentials")

    }

  }

  const handlesignup = (e) => {
    e.preventDefault();
    navigate('/Signup');
  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <ToastContainer position="bottom-right" toastStyle={{ backgroundColor: "#873cb3", color: "white" }} />

      <div className="container my-5 ">


        <div className='row shadow p-3 mb-5 bg-white rounded'>
          <div className='col-md-6 mx-1'>
            <img src={img1} alt='' />
            <div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
          </div>

          <div className='col-md-5 mx-1  my-4  '>

            <img className='image' alt='' src={img2} style={{ width: '27%' }} />
            <h2 className='center' style={{ color:"#873cb3" }}>User Login</h2>



            <form>
              <div className="mb-3 ">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email"  placeholder="Enter email to login" name="email" value={credentials.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"  placeholder="Enter Password here" name="password" value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label className="form-label">Create Account:</label>
                <button onClick={handlesignup} type="button" class="btn btn-link">Sign Up to Login</button>
              </div>
              <div className="container  text-center">
                <button type="submit"   style={{ background: " #873cb3", color:"white" }} onClick={handlesubmit} className="btn btn-light">Login</button>


              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logintwo
