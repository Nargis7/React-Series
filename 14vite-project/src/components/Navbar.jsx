import React from 'react'
import  logo  from '../assets/logo.jpeg'
// import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img src={logo}   width="130px"/>
      <ul>
       <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/about'><li>About</li></NavLink>
       <NavLink to='/product'><li>Product</li></NavLink>
       <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button onClick={() => navigate('/contact')}>Get Started</button>
    </div>
  )
}
export default Navbar


// <Link to='/'><li>Home</li></Link>
      //  <Link to='/about'><li>About</li></Link>
      //  <Link to='/product'><li>Product</li></Link>
      //  <Link to='/contact'><li>Contact</li></Link>