import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { _id: '1', href: '/', label: 'Home' },
    { _id: '2', href: '/about-us', label: 'About Us' },
    { _id: '3', href: '/contact-us', label: 'Contact Us' }
  ]

  const authLinks = [
    { _id: '1', href: '/login', label: 'Login' },
    { _id: '2', href: '/register', label: 'Register' }
  ]

  const [isAuth, setIsAuth] = useState(false);

  const handleLogOut = () => {
    setIsAuth(true);
  }

  return (
    <nav className='navbar' role='nav'>
      {links.map((link) => {
        return <NavLink  key={link._id} to={link.href}>{link.label}</NavLink>
      })}

      {!isAuth ? (
        <>
          {authLinks.map((link) => {
            return <NavLink  key={link._id} to={link.href}>{link.label}</NavLink>
          })}
        </>
      ) : (
        <button type='button' className='btn' onClick={handleLogOut}>Log Out</button>
      )}
    </nav>
  )
}
