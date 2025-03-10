import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar' role='nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/about-us'>About Us</NavLink>
      <NavLink to='/contact-us'>Contact Us</NavLink>
    </nav>
  )
}
