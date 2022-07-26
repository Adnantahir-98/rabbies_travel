import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <section className='bg-about-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Our Story
          </h1>
        </code>             
      </section>


      <section>
        <Container>
          <Row className='mx-auto'>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Our Story</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_ZT7wr2yWos" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
        <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>What we do</h1>
          <Row className='text-center'>
            <Col md={6} className='mx-auto'>
              <p>We relieve you of your travel worries.</p>
              <p>Our friendly guides ensure you don’t miss-out on the fascinating facts.</p>
              <p>Our carefully-crafted routes take you to both the classic sights and lesser-known locations.</p>
              <p>And our business model reduces your journey's <a href="#" className='text-success'>environmental impact.</a></p>
              <p>It sounds good, doesn’t it? Find out more about our award-winning experiences below.</p>
            </Col>
            <img src="imgs/about/bus3.jpg" alt="bus3.jpg" className='mx-auto img-fluid rounded w-75' />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>How we started</h1>
          <Row>
            <Col md={6} className='mx-auto text-center'> 
              <p>Robin Worsnop started our tour company in 1993.</p>
              <p>All he had was an old sherpa van and a few people telling him it would never work.</p>
              <p>Robin likes to think he started the company because he ‘saw a gap in the market’, ‘wanted to create an ethical way to travel’, and ‘knew what independent travellers wanted’.</p>
              <p>But we know the truth.</p>
              <p>He simply wanted to spend his time travelling around gorgeous places, discovering his homeland, and enjoying a dram with friendly faces from around the globe.</p>
              <p>He could have carried on doing this forever.</p>
              <p>But there was a gap in the market, he had created an ethical way to travel, and he showed people a really, really good time.</p>
              <p>So, people started to talk about Robin’s quirky tours.</p>
              <p>Robin had to hire more people, buy more mini-coaches, start working with spreadsheets, and concentrate on building the company so more people could live his dream.</p>
              <p>Now we have award-winning small-group tours departing from all over the UK & Europe.</p>
              <p>Sadly, Robin is too busy to see all these beautiful places as much as our guides. But he’s happy others are now seeing the places he loved in the way he loved seeing them.</p>
              <p>Throughout his journey, Robin has been guided by his vision to make the world a better place through travel.</p>
              <hr className='w-25 hr m-auto mt-4' />
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Meet the Guides</h1>
          <Row>
            <Col md={6} className='mx-auto'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/_OHDm6ccPcU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
            <Col md={12} className='text-center'>
              <div className='w-75 mx-auto'>
                <p className='mt-5'>Throw away your guidebooks and turn off that sat nav. Our driver-guides know your once-in-a-lifetime trip isn’t a checklist of 'must-sees'. It’s an experience that blends local stories with epic destinations.</p>
                <p>Some of them are history geeks and can tell you who owned every castle. Others are geologists and know how old all the mountains are. And a few of them are joke-telling-people-pleasing locals who’ll dedicate themselves to making you love their country as much as they do.</p>
                <p>But remember, they're not here to hold your hand. On every tour, you get the free-time and space to explore the destinations in your own way.</p>
                <p>Here are a few of the friendly faces.</p>
                <hr className='w-25 hr m-auto mt-4' />
              </div>
            </Col>
          </Row>

          <Row className='mt-5'>
            <Col md={4} className='text-muted text-center'>
              <img src="imgs/about/Ally_Palmer_Still_Image.jpg" alt="Ally_Palmer_Still_Image.jpg" className='img-fluid rounded-circle mb-3' />
              <h3>Ally Palmer</h3>
              <p>Ally's been working for Rabbie's for over 10 years.</p>
              <p>"I love to be at the front. Safe in the knowledge there's a team behind me giving me the support I need, allowing me the freedom to do my thing, my way. Outside of work, my dream is to tour round the world on my bike like Mark Beaumont."</p>
            </Col>
            <Col md={4} className='text-muted text-center'>
              <img src="imgs/about/Franscizka_Guide.jpg" alt="Franscizka_Guide.jpg" className='img-fluid rounded-circle mb-3' />
              <h3>Franziska Droll</h3>
              <p>Franziska's been working for Rabbie's for over 3 years.</p>
              <p>"The things I like most about my job are the changes of the seasons, the freedom of my own bus, the joy every new passenger brings to the tour and all the stories Scotland holds in every single corner."</p>
            </Col>
            <Col md={4} className='text-muted text-center'>
              <img src="imgs/about/DRIVER_WEEPET_250_X_250.jpg" alt="DRIVER_WEEPET_250_X_250.jpg" className='img-fluid rounded-circle mb-3' />
              <h3>Peter Falconer</h3>
              <p>Pete's been working for Rabbie's for over 8 years.</p>
              <p>“I have worked for Rabbie's for a number of years, I look forward to every season. Being a driver guide is hugely rewarding. Having the opportunity to share our landscape, culture and history with people from around the world. Every day brings something new."</p>
            </Col>
            <hr className='w-25 hr m-auto mt-4 mb-4' />
            <h5 className='mb-1 fw-normal text-center'>Fancy a career as a driver-guide? We're currently recruiting throughout the UK.</h5>
            <h5 className='fw-normal text-center'>Head over to our <Link to="#" className='text-success'>careers page</Link> for more information.</h5>
            <hr className='w-25 hr m-auto mt-4 mb-4' />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <h1 style={{fontFamily: 'Open Sans'}} className='display-5 my-5 text-center text-muted'>Why we only travel in small groups</h1>
          <Row>
            <Col md={6} className='mx-auto text-center'> 
              <p>We’re going to be honest with you.</p>
              <p>A long time ago we tried larger coaches.</p>
              <p>In theory, it would have been good for our bank accounts.</p>
              <p>But in the end, we stopped using them because of three simple reasons.</p>
              <p>Firstly, we received worse customer feedback. It turned out you guys preferred mini-coaches and didn’t appreciate trampling over a peaceful forest with 20, 30 or 40 other people.</p>
              <p>Secondly, we found it harder to give back to the local communities. It’s not as easy to stop at that local bakery when you need to bring 30 other friends with you.</p>
              <p>And thirdly, the big buses made it hard to go down the small roads that lead to your favourite hidden-away local treasures.</p>
              <p>So, we went back to our 16 seat mini-coaches.</p>
              <p>And we won’t ever go back to big ones. Because we’re never going to value anything more than your enjoyment, our environment, and the world’s best-kept secrets.</p>
              <hr className='w-25 hr m-auto mt-4' />
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default About
