import React from 'react'
import {
  Link
} from "react-router-dom";
import './Style/style.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hotel App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/rooms">BOOKING</Link>
              </li>
              <li className="nav-item dropdown nav-dropdown" >
                <Link className="nav-link dropdown-toggle nav-dropdown" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GUEST
                </Link>
                <ul className="dropdown-menu nav-dropdown" aria-labelledby="navbarDropdown">

                  <li className="nav-item">
                    <Link className="nav-link active nav-dropdown" aria-current="page" to="/guests">Display Guest</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active nav-dropdown" aria-current="page" to="/createguest">Create Guest</Link>
                  </li>

                </ul>
              </li>



              <li className="nav-item">
                <Link className="nav-link" to="/cal">CALENDAR</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/housekeeping">HOUSE KEEPING</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bill"></Link>
              </li>

            </ul>
            <Link className="btn  btn-light mx-1" to="/Logintwo" role="button">Login</Link>
            <Link className="btn  btn-light mx-1" to="/Signup" role="button">Signup</Link>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar