import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Footer.css'; 
import logo from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/logo.png'; 
import guard from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/guard.png'; 
import hw from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/hw.png'; 
import psych from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/psych.png'; 


const Footer = () => {
  return (
    <footer className="container-fluid">
      <div id="footer" className="col-sm">
        <h1 id="footHead1">
          <img id="footImg" src={logo} alt="Logo"/>
          Mindful Matters
        </h1>
        <h2 id="footHead">AS FEATURED IN:</h2>
        <img id="guard" className="img-fluid" src={guard} alt="the guardian"></img>
        <img id="hw" className="img-fluid" src={hw} alt="health and wellbeing"></img>
        <img id="psych" className="img-fluid" src={psych} alt="psychology today"></img>
        <hr/>
        <nav>
          <Link className="nav-link" id="navPrivacy" to="/Privacy">Privacy</Link>
        </nav>
        <p id="copywrite">©2021 All rights reserved.</p>     
      </div> 
   </footer>
  );   
}

export default Footer; 

