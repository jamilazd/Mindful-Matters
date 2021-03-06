import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Header.css'; 


const Header = () => {
  return (
    <header>
      <div>
         <div className="row">
          <div className="col">
            <ul id="nav" className="nav nav-tabs nav justify-content-end navbar navbar-expand-lg navbar-light"> 
              <img id="navImg" src="http://localhost:5000/static/logo.png" alt="Logo"/>
              <nav id="navBrand" className="navbar-brand">
                Mindful Matters
              </nav>
              <nav className="nav-item">
                <Link id="navStyle" className="nav-link Home" to="/">Home</Link>
              </nav>
              <nav className="nav-item">
                <Link id="navStyle"  className="nav-link VideoPage" to="/VideoPage">Videos</Link>
              </nav>
              <nav className="nav-item">
                <Link id="navStyle"  className="nav-link Playlist" to="/Playlist">Playlist</Link>
              </nav>
              <nav className="nav-item">
                <Link id="navStyle" className="nav-link About" to="/About">About</Link>
              </nav>
            </ul>
          </div>  
        </div>
      </div>
    </header> 
  ); 
}

export default Header; 


