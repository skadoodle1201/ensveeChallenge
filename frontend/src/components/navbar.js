


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import jwt from 'jsonwebtoken'
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const token = localStorage.getItem('token');
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EnsveeChallenge
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {!token && <li> 
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
              Login
              </Link>
            </li>}
            
            { !token && <li>
              <Link to='/register' className='nav-links'onClick={closeMobileMenu}>Sign Up
              </Link>
            </li>}

            { token && <li>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                DashBoard
              </Link>

            </li>}
            { token && <li> 
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                Logout
              </Link>
              </li>
            }
            
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;


