import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <div>
  <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
    <div className="row px-xl-5 pt-5">
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <Link to='/' className="text-decoration-none">
          <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">Book</span>Shelf</h1>
        </Link>
        <p>Welcome to Book Shelf, your premier destination for second-hand books! Discover a wide range of pre-loved titles, connect with fellow book lovers, and give your books a new home. Happy reading!</p>
        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <Link className="text-dark mb-2" to="/main" ><i className="fa fa-angle-right mr-2" />Home</Link>
              <Link className="text-dark mb-2" to="/manageuser" ><i className="fa fa-angle-right mr-2" />Manage User</Link>
              <Link className="text-dark mb-2" to="/purchaselog" ><i className="fa fa-angle-right mr-2" />Purchase Log</Link>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="row border-top border-light mx-xl-5 py-4">
      <div className="col-md-6 px-xl-0">
        <p className="mb-md-0 text-center text-md-left text-dark">
          © <link className="text-dark font-weight-semi-bold" to="/" />Book Shelf. All Rights Reserved. Designed
          by
          <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a><br />
          Distributed By ThemeWagon
        </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
        <img className="img-fluid" src="img/payments.png" alt="" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
