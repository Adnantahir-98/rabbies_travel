import { useState } from 'react'
import TopNavBar from './TopNav'
import { Link } from 'react-router-dom'
import {AiOutlinePhone} from 'react-icons/ai'


const Navbar = () => {

  const [alertShow, setAlertShow] = useState(true);
  const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
      if(window.scrollY >= 50){
        setNavbar(true);
      }else{
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeBackground)

  return (

    <div>
      <TopNavBar show={alertShow} setShow={setAlertShow}/>

      <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3 scrollBg' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3'}>
        <div className="container">
          <Link className="navbar-brand ml-2" to="/">
            <img src="logo.png" alt="Nav_logo.png" className='' style={{width: "150px"}}/>
          </Link>
          <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="btn btn-outline-success">Menu</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-2">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tour Scotland
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Tours from Edinburgh</Link>
                  <Link className="dropdown-item" to="#">Tours from Glasgow</Link>
                  <Link className="dropdown-item" to="#">Tours from Inverness</Link>
                  <Link className="dropdown-item" to="#">Tours from Aberdeen</Link>
                  <Link className="dropdown-item" to="#">Tours from London</Link>
                  <Link className="dropdown-item" to="#">Tours from Manchester</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tour England
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Tours from London</Link>
                  <Link className="dropdown-item" to="#">Tours from Edinburgh</Link>
                  <Link className="dropdown-item" to="#">Tours from Manchester</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tour Ireland
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Tours from Dublin</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="#">
                  Tour Europe
                </Link>
              </li>

            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to="#">About us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="#">Private Tours</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="#"><AiOutlinePhone /></Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar
