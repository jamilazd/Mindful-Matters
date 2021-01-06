import React from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from './logo.png'; 
import './Header.css'; 


const Header = () => {
  return (
    <header className="container-fluid">
      <ul id="nav" className="nav nav-tabs nav justify-content-end navbar navbar-expand-lg navbar-light">
        <div className="container">
          <nav className="navbar-brand">
            <img src={logo} alt="Logo"/>
          </nav>
            <nav id="brandName" className="navbar-brand">Mindful Matters</nav>
        </div>
        <nav className="nav-item">
          <Link className="nav-link Home" to="/">Home</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link Video" to="/Video">Videos</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link Quiz" to="/Quiz">Quiz</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link About" to="/About">About</Link>
        </nav>
      </ul>
    </header> 
  ); 
}

export default Header; 



