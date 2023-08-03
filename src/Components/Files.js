import React from 'react';
import {useNavigate, Route, Routes, redirect  } from "react-router-dom";
import Header from './Header';
import Service from './Service';
import About from './About';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import Signup from './Signup';
import Userdetails from './Userdetails';
import Edit from './Edit';



function Files () {

// const Navigate=useNavigate();
// const handleClick=()=>Navigate('/Info');
  
  return (
    <div>
      {/* <button type='button' onClick={handleClick}>click</button> */}

      <Header />
      <Routes>
        <Route path='/' element={<Service/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/Portfolio' element={<Portfolio/>} ></Route>
        <Route path='/Team' element={<Team/>} ></Route>
        <Route path='/Contact' element={<Contact/>} ></Route>
        <Route path='/Info' element={<Info/>} ></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Userdetails' element={<Userdetails/>}  ></Route>
        <Route path='/Edit' element={<Edit/>}></Route>
      </Routes>
      <Footer/>

    </div>
  )
}
export default Files;