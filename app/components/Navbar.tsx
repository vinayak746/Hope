import React from 'react'
import { Link } from 'react-router'
import logo from '/Logo.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" >
        {/* <p className='text-2xl font-bold text-gradient' >HOPE</p> */}
        <img src={logo} alt="Hope Logo" className='w-24 h-24' />
        </Link>
        <Link to="/upload" className='primary-button w-fit'>
          Upload Resume
        </Link>
    </nav>
  )
}

export default Navbar