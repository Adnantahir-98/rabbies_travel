import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <section className='bg-contact-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '150px', textShadow: '1px 2px #000'}}>
            Contact Us
          </h1>
        </code>             
      </section>

      
      <section>
        <Container>
            <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Stay in Touch</h1>
            <Row>
                <Col md={6} className='text-muted'>
                    <h3>Our Location</h3>
                    <h4 className='fw-light'>Rabbie's Café, Waterloo Place, Edinburgh, EH1 3EG Scotland.</h4>

                    <h5 className='fw-normal mt-3'>Opening times:</h5>
                    <p className='mb-1'>Mon - Sat: 7:30 to 16:00</p>
                    <p>Sun: 7:30 to 15:00</p>

                    <h4 className='fw-light mb-2'></h4>
                    <h5 className='fw-normal mt-3'>Phone Rabbie's</h5>
                    <p className='mb-0'>Tel: <strong>+44(0) 131 226 3133</strong></p>
                    <p>Mon - Sun: 07:30 - 15:00</p>

                    <h5 className='fw-normal mt-3'>Email Rabbie's</h5>
                    <p className='mb-0'>Tour enquiries: <a className='text-success h6 fw-normal' href="#">tours@rabbies.com</a></p>
                    <p>Press enquiries: <a className='text-success h6 fw-normal' href="#">PR@rabbies.com</a></p>
                </Col>
                <Col md={6}>
                    <form className="" method="POST">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" required placeholder="Your FullName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" required placeholder="Your Email Address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" required placeholder="You Message here." rows="4"></textarea>
                        </div>
                        <button className="btn btn-outline-success">Submit</button>
                    </form>
                </Col>
                <Col md={12}>
                </Col>
            </Row>
        </Container>
      </section>


      <section className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538884.6314185585!2d-4.49875705404658!3d56.25278192596576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c78efefc9a23%3A0x45465a02f12ed373!2sRabbie&#39;s%20Cafe%20Bar!5e0!3m2!1sen!2s!4v1658846429459!5m2!1sen!2s" width="99.8%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </div>
  )
}

export default Contact