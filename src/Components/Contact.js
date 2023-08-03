import React from 'react'

function Contact (){
  return (
    <div>
        
<div className="container-fluid p-0 mt-5">
  <div className="contain bg-dark">
    <div className="row justify-content-center text-center pt-5">
      <div className="col-lg-8 col-md-8 col-sm-8 text-white mt-5">
        <h1>CONTACT US</h1>
        <h5 className="text-secondary mt-4">Lorem ipsum dolor sit amet consectetur.</h5>
      </div>
    </div>
    <form id="form" action="google.com">
    <div className="row px-5">
      <div className="col-lg-6 col-md-6 col-sm-6 px-5 ">
         <div className="mb-3 ">
          <label for="Email" className="form-label">your Name</label>
          <input type="name" className="form-control p-4" id="username" placeholder="Your Name*" aria-describedby="emailHelp" value=""/>
          <span className="text-danger" id="name"></span>
           </div>

        <div className="mb-3">
          <label for="Email" className="form-label">Email address</label>
          <input type="email" className="form-control p-4" id="email" placeholder="Your Email*" aria-describedby="emailHelp"/>
          <span className="text-danger" id="useremail"></span>
        </div>

        <div className="mb-3">
          <label for="Number" className="form-label">your phone</label>
          <input type="text" className="form-control p-4" placeholder="Your phone*" id="number"/>
          <span className="text-danger" id="usernumber"></span>
        </div>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 px-5 ">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="13"></textarea>
      </div>
    </div>
 </div>
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-8 col-sm-8">
       <button type="button"  className="btn btn-warning text-white fw-bold fs-5 px-5 py-4" onclick="myfunction()">Send message</button>
     </div>
   </div>
  </form>
</div>
</div>

    </div>
  )
}
export default Contact;
