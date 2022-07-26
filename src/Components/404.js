import React from 'react'
import '../Assets/css/style.css'
import {Link} from 'react-router-dom'


const Page404 = () => {
  return (
    <div className='pt-5 bg-404'>
        <h1 className='text-danger text-center display-2 mt-4'>Error 404</h1>
        <h3 className='text-center'>Page not Found</h3>
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className='text-center'>
            <Link to="/" className="text-success">Go Back to Home</Link>
        </div>
    </div>
  )
}

export default Page404
