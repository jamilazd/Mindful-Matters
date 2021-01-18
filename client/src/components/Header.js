import React from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/logo.png'; 
import './Header.css'; 


const Header = () => {
  return (
    <header id="head" className="container-fluid">
      <ul id="nav" className="nav nav-tabs nav justify-content-end navbar navbar-expand-lg navbar-light">
        <div className="container">
          <nav className="navbar-brand">
            <img src={logo} alt="Logo"/>
          </nav>
          <nav id="brandName" className="navbar-brand">Mindful Matters</nav>
          <nav className="nav-item">
            <Link id="navStyle" className="nav-link Home" to="/">Home</Link>
          </nav>
          <nav className="nav-item">
            <Link id="navStyle"  className="nav-link Video" to="/Video">Videos</Link>
          </nav>
          <nav className="nav-item">
            <Link id="navStyle" className="nav-link About" to="/About">About</Link>
          </nav>
        </div>
      </ul>
    </header> 
  ); 
}

export default Header; 



