import {Container, Row, Col} from 'react-bootstrap'


const Tours = () => {
  return (
    <div>
        <section className='bg-about-img'>
        <code>
          <h1 className='text-white text-center' style={{paddingTop: '200px', textShadow: '1px 2px #000'}}>
            Loch Ness, Glencoe & the Highlands
          </h1>
          <h5>1 day tour</h5>
        </code>             
      </section>


        <section>
            <Container>
                <Row>
                    <h1>Tour Page</h1>
                    <p>Something</p>
                </Row>
            </Container>
        </section>

    </div>
  )
}

export default Tours