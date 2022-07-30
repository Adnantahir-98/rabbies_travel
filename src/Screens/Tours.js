import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
import {useNavigate} from 'react-router-dom'

import {Container, Row, Col} from 'react-bootstrap'
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa'
import {AiOutlineWechat} from 'react-icons/ai'


const Tours = ({inputText, 
    setInput, 
    selectAdults, 
    setSelectAdults,
    selectChildren,
    setSelectChildren,
    selectSenior,
    setSelectSenior,
    selectStudents,
    setSelectStudents,
    date,
    setDate,
    tourBooking, 
    setTourBooking}) => {


  const navigate = useNavigate();

  const handleChange = (e) => {
    setDate(e.target.value)
  }

  const InputHandler = (e) =>{
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const SelectAdultHandler = (e) => {
    setSelectAdults(e.target.value)
  }
  const SelectChildrenHandler = (e) => {
    setSelectChildren(e.target.value)
  }
  const SelectSeniorHandler = (e) => {
    setSelectSenior(e.target.value)
  }
  const SelectStudentsHandler = (e) => {
    setSelectStudents(e.target.value)
  }

  const SaveHandler = (e) => {
    e.preventDefault()
    console.log(setTourBooking)
    const u_id = uuid()
    setTourBooking([
        ...tourBooking,
        {text: inputText, id: u_id, 
        adults: selectAdults, 
        children: selectChildren, 
        seniors: selectSenior, 
        students: selectStudents, 
        date: date }
    ])
    setInput("")
    setTimeout(() => {
        navigate('/checkout');
    }, 1000)
  }
  return (
    <div>
      <section className='bg-about-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Loch Ness, Glencoe & the Highlands
          </h1>
          <h5 className='text-center text-dark'><strong>1 day tour</strong></h5>
        </code>             
      </section>


        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        SlideSHow...
                    </Col>
                    <Col md={6}>
                        <form className='my-5'>
                            <Row>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Adults</label>
                                        <select className="custom-select" onClick={SelectAdultHandler}>
                                            <option>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Children </label>
                                        <select className="custom-select" onClick={SelectChildrenHandler}>
                                            <option defaultValue="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Seniors </label>
                                        <select className="custom-select" onClick={SelectSeniorHandler}>
                                            <option>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Students </label>
                                        <select className="custom-select" onClick={SelectStudentsHandler}>
                                            <option>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <div className="form-group">
                                        <input type='number' onChange={InputHandler} value={inputText} className='form-control disable' placeholder='$77' />
                                    </div>  
                                </Col>
                                <Col md={6}>
                                    <input type='date' onChange={handleChange} value={inputText} className='form-control' />
                                </Col>
                                <button className='btn btn-outline-success mt-5' onClick={SaveHandler}>Book Now</button>
                            </Row>
                        </form>
                        
                        <Row>
                            <Col md={3}>
                                <a href='#' className='text-muted h1' target='_blank'><FaTwitter /></a>
                            </Col>
                            <Col md={3}>
                                <a href='#' className='text-muted h1' target='_blank'><FaFacebookF /></a>
                            </Col>
                            <Col md={3}>
                                <a href='#' className='text-muted h1' target='_blank'><FaPinterest /></a>
                            </Col>
                            <Col md={3}>
                                <a href='#' className='text-muted h1' target='_blank'><AiOutlineWechat /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <h5 className='col-md-6 text-muted m-auto my-5 text-center'>A two day escape exploring the majesty of Loch Ness, the Caledonian pine forest, and the stunning scenery of the Cairngorms National Park.</h5>
                <h6>Tour map</h6>

                <div className='jumbotron'>
                    <h5>Highlights</h5>
                    <i>Icons</i> <i>Icons</i> <i>Icons</i>
                    <h5>Places you explore</h5>
                    <p><strong>Pitlochry</strong> - This wonderful little village was one of Queen Victoria’s favourite holiday spots.</p>
                    <p><strong>Caledonian Pine Forest walk</strong> - Walk over mossy paths and under a dark green canopy in a gorgeous forest.</p>
                    <p><strong>Cairngorms National park </strong> - Gaze in awe at Scotland’s most beautifully rounded peaks.</p>
                    <p><strong>Urquhart Castle</strong> - Enjoy views of a ruined castle overlooking Loch Ness.</p>
                    <p><strong>Inverness</strong> - The ‘Capital of the Highlands’ blends Victorian architecture with a lively modern lifestyle.</p>
                    <p><strong>Loch Ness</strong> - Take a chance to go on an optional boat cruise (April - October) or wander around the shores of this alluring and eerie loch.</p>
                    <p><strong>Great Glen</strong> - A humongous fault line through the Scottish Highlands; a location that’s as historically important as it is stunning.</p>
                    <p><strong>Glencoe </strong> - Be moved by the sheer beauty and tragic tale of one of Scotland’s most famous landscapes.</p>
                </div>

                <h5>Your journey</h5>
                <p>Explore Loch Ness and the Highlands at a laid-back pace on this two day tour.</p>
                <p>You learn about Scotland’s native forests on a tranquil walk. You travel through majestic mountains and quaint villages. And you get plenty of time to see if you can find the infamous Loch Ness Monster.</p>
                <p className='mb-5'>So join this tour, relax and let us show you the best of the Scottish Highlands.</p>

                <div>
                    <h2 className='bg-success p-3 text-center text-white p-0 m-0'>4	reasons to choose Rabbie's</h2>
                    <div className='jumbotron'>
                        <Row className="text-center">
                            <Col md={3}>
                                <img src="imgs/icon-van.png" alt="icon-van.png" />
                                <p>Travel in small groups or <a href="#" className='text-success'>private tours</a></p>
                            </Col>
                            <Col md={3}>
                                <img src="imgs/money-back.png" alt="" />
                                <p>You'll have a guaranteed experience or your money back</p>
                            </Col>
                            <Col md={3}>
                                <img src="imgs/guaranteed-departures.png" alt="" />
                                <p>Guaranteed departures: We'll never cancel your tour because of minimum numbers</p>
                            </Col>
                            <Col md={3}>
                                <img src="imgs/leaf.png" alt="" />
                                <p>Our eco-friendly tours support local communities</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>

    </div>
  )
}

export default Tours
