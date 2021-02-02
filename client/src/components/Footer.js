import React from 'react'; 
import './Footer.css'; 



const Footer = () => {
  return (
    <footer >
      <div id="footer" className="col-sm">
        <h1 id="footHead1">
          <img id="footImg" src="http://localhost:5000/static/logo.png" alt="Logo"/>
          Mindful Matters
        </h1>  
        <h2 id="footHead">AS FEATURED IN:</h2>
        <img id="hw" className="img-fluid" src="http://localhost:5000/static/hw.png" alt="health and wellbeing"></img>
        <img id="psych" className="img-fluid" src="http://localhost:5000/static/psych.png" alt="psychology today"></img>
        <img id="guard" className="img-fluid" src="http://localhost:5000/static/guard.png" alt="the guardian"></img> 
        <hr className="hr"/>
        <p id="copyright">Copyright © Mindful Matters 2020</p>
      </div> 
   </footer>
  );   
}

export default Footer; 

