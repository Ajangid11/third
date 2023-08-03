import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate,useLocation } from "react-router-dom";

function Edit() {

  const location = useLocation();
  const navigate = useNavigate();
  let [Arr, setArr] = useState(location.state.data);
  var index = location.state.index;

  function formSubmit(e) {
    e.preventDefault();
    let newValue = JSON.parse(localStorage.getItem('Data'));
    if (newValue[index] != undefined) {
      newValue[index] = Arr;
      localStorage.setItem('Data', JSON.stringify(newValue));
    }
   navigate('/Userdetails');
  }



  function handleInput(e) {
    var name = e.target.attributes.name.value;
    var value = e.target.value;
    setArr({ ...Arr, [name]: value });
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="container1">
          <h1>Edit page</h1>
          <hr />
          <label for="name"><b>Name</b></label>
          <input type="text" onChange={handleInput} value={Arr.name} name="name" required />
          <label for="number"><b>Number</b></label>
          <input type="number" onChange={handleInput} value={Arr.number} name="number" required />
          <label for="text"><b>Date Of Birth</b></label>
          <input type="text" onChange={handleInput} value={Arr.dob} name="dob" required />
          <label for="email"><b>Email</b></label>
          <input type="text" onChange={handleInput} value={Arr.email} name="email" required />
          <label for="name"><b>Address</b></label>
          <textarea name="address" onChange={handleInput} value={Arr.address} rows="4" cols="50" required />
          <label for="psw"><b>Password</b></label>
          <input type="password" onChange={handleInput} value={Arr.psw} name="psw" required />
          <div className="clearfix">
            <button type="button" className="cancelbtn button2">Cancel</button>
            <button type="submit" className="signupbtn button2 ">UPDATE</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Edit;
