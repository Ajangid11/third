import React from 'react'

function Team () {
  return (
    <div>
        
<div className="container-fluid  mt-5">
  <div className="row text-center mt-5  pt-5">
    <div className="col-lg-12 col-md-12 col-sm-12 "><h1 className="fw-bold"> OUR AMAZING TEAM</h1></div>
    <div className="col-lg-12 col-md-12 col-sm-12 text-secondary mt-2 fst-italic fs-5">Lorem ipsum dolor sit amet consectetur.</div>
  </div>

  <div className="row justify-content-center"> 
    <div className="col-lg-3 col-md-3 col-sm-3  text-center ">
     <div className="circle3 mx-auto">
      <img className="img-fluid  border border-5 rounded-img" src="img/team/1.jpg"/>
    </div>
    <h2 className="mt-2 ">Parveen Anand</h2>
    <h5 className="text-secondary">Lead Designer</h5>
    <div className="ms-5">
     <div className="round bg-dark mx-2">
       <i className="fa-brands fa-twitter text-white fs-3 pt-2" aria-hidden="true"></i>
     </div>
     <div className="round bg-dark mx-2">
       <i className="fa-brands fa-facebook text-white fs-3 pt-2" aria-hidden="true"></i>
     </div>
     <div className="round bg-dark mx-2">
       <i className="fa-brands fa-linkedin text-white fs-3 pt-2" aria-hidden="true"></i>
     </div>
   </div>
 </div>

 <div className="col-lg-3 col-md-3 col-sm-3  text-center ">
   <div className="circle3 mx-auto">
    <img className="img-fluid  border border-5 rounded-img" src="img/team/2.jpg"/>
  </div>
  <h2 className="mt-2 ">Diana Petersen</h2>
  <h5 className="text-secondary">Lead Marketer</h5>
  <div className="ms-5">
   <div className="round bg-dark mx-2">
     <i className="fa-brands fa-twitter text-white fs-3 pt-2" aria-hidden="true"></i>
   </div>
   <div className="round bg-dark mx-2">
     <i className="fa-brands fa-facebook text-white fs-3 pt-2" aria-hidden="true"></i>
   </div>
   <div className="round bg-dark mx-2">
     <i className="fa-brands fa-linkedin text-white fs-3 pt-2" aria-hidden="true"></i>
   </div>
 </div>
</div>

<div className="col-lg-3 col-md-3 col-sm-3  text-center ">
 <div className="circle3  mx-auto">
  <img className="img-fluid  border border-5  rounded-img" src="img/team/3.jpg"/>
</div>
<h2 className="mt-2 ">Larry Parker</h2>
<h5 className="text-secondary">Lead Developer</h5>
<div className="ms-5">
 <div className="round bg-dark mx-2">
   <i className="fa-brands fa-twitter text-white fs-3 pt-2" aria-hidden="true"></i>
 </div>
 <div className="round bg-dark mx-2">
   <i className="fa-brands fa-facebook text-white fs-3 pt-2" aria-hidden="true"></i>
 </div>
 <div className="round bg-dark mx-2">
   <i className="fa-brands fa-linkedin text-white fs-3 pt-2" aria-hidden="true"></i>
 </div>
</div>
</div>
</div>

<div className="row text-center justify-content-center text-secondary mt-5">
  <div className="col-lg-8 col-md-8 col-sm-8 fs-5 px-5 mb-5">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
  </div>
</div>

<div className="row justify-content-center text-center mt-5">
  <div className="col-lg-3 col-md-3 col-sm-3">
    <img className="img-fluid" src="img/logos/microsoft.svg" width="205" height="44"/>
  </div>
  <div className="col-lg-3 col-md-3 col-sm-3">
    <img className="img-fluid" src="img/logos/google.svg" width="118" height="44"/>
  </div>
  <div className="col-lg-3 col-md-3 col-sm-3">
    <img className="img-fluid" src="img/logos/facebook.svg" width="163" height="44"/>
  </div>
  <div className="col-lg-3 col-md-3 col-sm-3">
    <img className="img-fluid" src="img/logos/ibm.svg" width="110" height="44"/>
  </div>
</div>
</div>

    </div>
  )
}
export default Team;