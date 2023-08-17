import React, { useState } from 'react';
import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>P</span>aper<span>s</span>helf
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <Link to="/" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>Home</Link>
            </li>
            <li>
              <Link to="/book" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>Books</Link>
            </li>
            <li>
              <Link to="/exam" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>Exam Papers</Link>
            </li>
             <li>
              <Link to="/ct" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>CT Exam Papers</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>About Us</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/add" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>Add</Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <Link
                  to="/"
                  onClick={() =>{
                     setShowMediaIcons(!showMediaIcons)
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })}
                  }
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/" onClick={() =>{ 
                setShowMediaIcons(!showMediaIcons)
                loginWithRedirect() }}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <GiHamburgerMenu  onClick={() => {setShowMediaIcons(!showMediaIcons)}}/>
         
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
