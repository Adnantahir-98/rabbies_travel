import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa'
import {ImInstagram, ImYoutube2, ImLocation2} from 'react-icons/im'

const Footer = () => {

  return (
    <div>
      <section>
        <footer className="mt-5 text-center" style={{background:"#162e5b"}}>
          {/* Footers Main menu */}
          <section className="mt-3 pt-5 text-white">
            <div className="container">
              <div className="row">
                  
                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Pages</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/faq" className="text-white">Conference Services</Link></li>
                    <li className="nav-item"><Link to="/termsconditions" className="text-white">Student Tours Scotland</Link></li>
                    <li className="nav-item"><Link to="/cancellationpolicy" className="text-white">Agents & Affiliates</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Privacy & Cookies</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Terms & Conditions</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">Accessibility</Link></li>
                    <li className="nav-item"><Link to="/privacypolicy" className="text-white">Careers</Link></li>
                    <li className="nav-item"><Link to="/shippingpolicy" className="text-white">Blog</Link></li>
                    <li className="nav-item"><Link to="#" className="text-white">FAQs</Link></li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Links</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link to="#" className="text-white">Follow us</Link></li>
                    <div className="d-flex m-auto mt-4">
                      <li className="nav-item h1 me-3"><a href="https://www.facebook.com/" target="_blank" className="text-white"><FaFacebookF /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.instagram.com/" target="_blank" className="text-white"><ImInstagram /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.twitter.com/" target="_blank" className="text-white"><FaTwitter /></a></li>
                      <li className="nav-item h1 me-3"><a href="https://www.pinterest.com/" target="_blank" className="text-white"><FaPinterest /></a></li>
                      <li className="nav-item h1"><a href="https://www.youtube.com/" target="_blank" className="text-white"><ImYoutube2 /></a></li>
                    </div>
                    <img src="imgs/logo-mono-47.png" className='img-fluid w-25 m-auto mt-4 mb-3' alt="Logo-Moon-47.png" />
                  </ul>
                </div>

                <div className="col-md-4">
                  <h6 className="font-weight-bold mb-3">Contact Us</h6>
                  <ul className="navbar-nav">
                    <li className="nav-item h3"><a href="https://wa.me/4401312263133" target="_blank" className="text-white">+44 (0) 131 226 3133</a></li>
                    <li className="nav-item mt-3 h4"><Link to="#" className="text-white">Find us</Link></li>
                    <li className="nav-item">
                      <Link to="/about" className="text-white">
                        Our Departure Points <ImLocation2 />
                      </Link>
                    </li>

                    <div className='row'>
                      <img src="imgs/abtot-l.png" alt="abtot-l.png" className='img-responsive w-50 mt-4' />
                      <img src="imgs/topp-protected.jpg" alt="topp-protected.jpg" className='img-responsive w-50 mt-4' />
                    </div>
                  </ul>
                </div>

                <div className="payment-method-footer-imgs m-auto pb-5 pt-5">
                  <img src="imgs/card-logos.png" alt="MasterCard.png" className="img-fluid" style={{height: "65px", width: "350px"}} />
                </div>
                <br />
              </div>
            </div>
          </section>

          <div className="bg-light">
            <p className='text-left m-0 px-2 py-4 text-dark'>
              &copy; 2022 
              <a href="https://www.rabbies.com/en" className='text-success text-decoration-none'> Rabbies.com. </a> 
              All Rights Reserved.
            </p>
          </div>

        </footer>

      </section>
    </div>
  )
}

export default Footer
