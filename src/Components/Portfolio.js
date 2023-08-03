import React from 'react'

function Portfolio () {
  return (
    <div>
        
{/* portfolio */}

<div className="container-fluid bg-light">
  <div className="row text-center mt-5  pt-5">
    <div className="col-lg-12 col-md-12 col-sm-12 "><h1 className="fw-bold"> PORTFOLIO</h1></div>
    <div className="col-lg-12 col-md-12 col-sm-12 text-secondary mt-2 fst-italic fs-5">Lorem ipsum dolor sit amet consectetur.</div>
  </div>
  <div className="row justify-content-center mt-5">
    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
      <img className="img-fluid" src="img/portfolio/1.jpg" width="356" height="267"/>
      <h2 className="mt-4">Threads</h2>
      <h5 className="text-secondary fst-italic">Illustration</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 ms-5  text-center">
      <img className="img-fluid" src="img/portfolio/2.jpg" id="image" width="356" height="267"/>
      <h2 className="mt-4">Explore</h2>
      <h5 className="text-secondary fst-italic">Graphic Design</h5>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox"  checked/>
     </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 ms-5 text-center">
      <img className="img-fluid" src="img/portfolio/3.jpg" width="356" height="267"/>
      <h2 className="mt-4">Finish</h2>
      <h5 className="text-secondary fst-italic">Identity</h5>
    </div>
  </div>

  <div className="row justify-content-center mt-5">
    <div className="col-lg-3 col-md-3 col-sm-3 text-center">
      <img className="img-fluid" src="img/portfolio/4.jpg" width="356" height="267"/>
      <h2 className="mt-4">Lines</h2>
      <h5 className="text-secondary fst-italic">Branding</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 ms-5 text-center">
      <img className="img-fluid" src="img/portfolio/5.jpg" width="356" height="267"/>
      <h2 className="mt-4">Southwest</h2>
      <h5 className="text-secondary fst-italic">Website Design</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 ms-5 text-center">
      <img className="img-fluid" src="img/portfolio/6.jpg" width="356" height="267"/>
      <h2 className="mt-4">Window</h2>
      <h5 className="text-secondary fst-italic">Photography</h5>
    </div>
  </div>
</div>
    </div>
  )
}

export default Portfolio;
