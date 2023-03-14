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
            <span>M</span>y<span>L</span>ibrary
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Books</Link>
            </li>
            <li>
              <Link to="/exam">Exam Papers</Link>
            </li>
             <li>
              <Link to="/service">CT Exam Papers</Link>
            </li>
            <li>
              <Link to="/contact">About Us</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/add">Add Book</Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/" onClick={() => loginWithRedirect()}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="/#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
