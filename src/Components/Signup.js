import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Userdetails from './Userdetails';
import { Table } from 'react-bootstrap';




function Signup () {
  const[getdata,setData]=useState({name:''})
  const [Arr,setArr]=useState([]);

  function handleSubmit(e){
    e.preventDefault();
    if(Object.keys(getdata).length && getdata.name!=''){
      Arr.push(getdata);
      localStorage.setItem('Data',JSON.stringify(Arr));
      getDataFromDB();
      setData({name:''})
      console.log("getdata:",getdata)
      console.log("Arr:",Arr)
    }
  }

 

  function handleChange(e){
    var name = e.target.attributes.name.value;
    var value = e.target.value;
    setData({...getdata,
      [name]:value
    });
  }


  function getDataFromDB(){
    const demo=localStorage.getItem('Data');
    if(demo!='' && demo!=undefined && demo!=' '){
      var signupvalue=JSON.parse(demo);
      if(Array.isArray(signupvalue)){
        setArr(signupvalue);
      }
    }
  }
  
  

 useEffect(()=>{
  getDataFromDB();
 },[])




  return (
    <div>
     <form>
        <div className="container1">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>

         
          
          <label for="name"><b>Name</b></label>
          <input type="text" onChange={handleChange} placeholder="Enter Name" value={getdata.name} name="name" required/>

          <label for="number"><b>Number</b></label>
          <input type="number" onChange={handleChange} placeholder="Enter Number" value={getdata.number} name="number" required/>

          <label for="text"><b>Date Of Birth</b></label>
          <input type="text" onChange={handleChange} placeholder="Enter Date Of Birth" value={getdata.dob} name="dob" required/>

          <label for="email"><b>Email</b></label>
          <input type="text" onChange={handleChange} placeholder="Enter Email" value={getdata.email} name="email" required/>

          <label for="name"><b>Address</b></label>
          <textarea onChange={handleChange} placeholder="Enter Address" name="address" value={getdata.address} rows="4" cols="50" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" onChange={handleChange} placeholder="Enter Password" value={getdata.pws} name="psw" required/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" onChange={handleChange} placeholder="Repeat Password" value={getdata.pswrepeat} name="pswrepeat" required/>
    
          <div className="clearfix">
            <button type="button" className="cancelbtn button2">Cancel</button>
            <button type="submit" onClick={handleSubmit} className="signupbtn button2">
                   <Link to='/Userdetails' state={{Arr:Arr}}> SIGN UP</Link>
            </button>
          </div>    
  </div>
</form>

    


    </div>
  )
}

export default Signup;
