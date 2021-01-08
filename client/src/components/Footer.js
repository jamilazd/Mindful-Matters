import React from 'react'; 
import './Footer.css'; 
import guard from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/guard.png'; 
import hw from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/hw.png'; 
import psych from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/psych.png'; 


const Footer = () => {
  return (
    <footer className="container-fluid">
      
        <div className="col-sm" id="trustLinks">
          <p>As Featured in:</p>
          <img id="guard" className="img-fluid" src={guard} alt="the guardian"></img>
          <img id="hw" className="img-fluid" src={hw} alt="health and wellbeing"></img>
          <img id="psych" className="img-fluid" src={psych} alt="psychology today"></img> 
        </div>
        <div id="bottomFooter">
          <p className="col-sm">©2021 All rights reserved.</p>     
        </div>
      
    </footer>
  );   
}

export default Footer; 

/* 
  <div className="col">
    <h3>Find out more</h3>
    <nav></nav> 
  <div className="col">
    <p>©2021 All rights reserved.</p>     
  </div> 

*/ 