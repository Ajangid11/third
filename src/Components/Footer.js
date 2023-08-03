import React from 'react'

function Footer () {
  return (
    <div>
        <div className="container-fluid py-3  border-top mt-5 mb-3">
         <div className="row  text-secondary justify-content-center text-center pt-4  ">
         <div className="col-lg-4 col-md-4 col-sm-4 fs-5 ">
          Copyright © Your Website 2023
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 ps-5">
         <div className="round bg-dark  ms-5"><i className="fa-brands fa-twitter text-white px-3 py-3 fs-5"></i></div>
         <div className="round bg-dark ms-3 "><i className="fa-brands fa-facebook text-white px-3 py-3 fs-5"></i></div>
         <div className="round bg-dark  ms-3"><i className="fa-brands fa-linkedin text-white px-3 py-3 fs-5"></i></div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4">
         <span className="fs-5">Privacy Policy</span>
         <span className="ps-5 fs-5"> Terms of Use</span>
         </div>
        </div>
        </div>
    </div>
  )
}
export default Footer;