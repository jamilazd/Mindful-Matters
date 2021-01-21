import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Footer.css'; 



const Footer = () => {
  return (
    <footer className="container-fluid">
      <div id="footer" className="col-sm">
        <h1 id="footHead1">
          <img id="footImg" src="http://localhost:5000/static/logo.png" alt="Logo"/>
          Mindful Matters
        </h1>
        <hr />
        <h2 id="footHead">AS FEATURED IN:</h2>
        <img id="guard" className="img-fluid" src="http://localhost:5000/static/guard.png" alt="the guardian"></img>
        <img id="hw" className="img-fluid" src="http://localhost:5000/static/hw.png" alt="health and wellbeing"></img>
        <img id="psych" className="img-fluid" src="http://localhost:5000/static/hw.psych" alt="psychology today"></img>
        <nav>
          <Link className="nav-link" id="navPrivacy" to="/Privacy">Privacy</Link>
        </nav>
        <p id="copywrite">©2021 All rights reserved.</p>     
      </div> 
   </footer>
  );   
}

export default Footer; 

