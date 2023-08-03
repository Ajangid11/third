import React from 'react';
import {Link } from "react-router-dom";

function Header (props)  {
  return (
    <div>
                 
     <div className="container-fluid bg-dark px-5">
     <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
       <Link className="navbar-brand" to="/">
        <img src="img/navbar-logo.svg" alt="Logo" width="187" height="32" className="d-inline-block align-text-top"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse first" id="navbarNav" >
        <ul className="navbar-nav p-4 pe-1 fs-5 fw-lighter ">
          <li className="nav-item ">
            <Link className="nav-link text-white mx-3" aria-current="page" to="/">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-3" to="/Portfolio">PORTFOLIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-3 " to="/About">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-3" to="/Team">TEAM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-3" to="/Contact">CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link onClick={props.login} className="nav-link text-white mx-3" to="/">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-3" to="/Signup">SIGNUP</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-white " to="/Userdetails">USER DETAILS</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
</div>
{/* middle part */}
<div className="container-fluid p-0 bg-dark header_img">
  <div className="container">
    <div className="text-center text-white" >
      <div className="fs-1 fst-italic">Welcome To Our Studio!</div>
      <div className="fw-bold mb-3 mt-5" >IT'S NICE TO MEET YOU</div>
      <button className="bg-warning rounded border border-warning text-white p-4 px-5 fs-5 fw-bold mt-5 mb-5 ">TELL ME MORE</button>
    </div>
  </div>
</div>
 {/* middle close  */}
 {/* header close  */}
    </div>
  )
}
 export default Header;