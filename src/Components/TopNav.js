import {useState} from 'react'
import {Alert} from 'react-bootstrap'
import {TiDelete} from 'react-icons/ti'


const TopNav = () => {
    const [show, setShow] = useState(true);

  return (
    <div>
        <Alert show={show} variant="danger" className='text-dark p-2 m-0 h6 fw-normal'>
            We are open. Find out about our
            <a href="#" className='ms-2 me-3'>Covid-19 Information here.</a>        
            <i>close <TiDelete onClick={() => setShow(false)} /></i>
      </Alert>
    </div>
  )
}

export default TopNav