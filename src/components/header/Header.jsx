import React from "react";
import "./header.css";
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const handleLogout = () => {
  // Clear session storage flag
  sessionStorage.removeItem('isLoggedIn');
  window.location.href = '/';
};

const Header = ( ) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="projectHeader">
          <img src={logo} alt="Logo" className="logo-img"/>
          <h1>SmartSafe Doorway</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            {isLoggedIn && (
              <NavLink to="/users">Users</NavLink>
            )}
            </li>
            <li>
              <NavLink to="/records">Records</NavLink>
            </li>
            <li>
              {isLoggedIn && location.pathname !== '/' && ( // Only show button if logged in and not on '/'
                <button className="logoutBtn" onClick={handleLogout}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
