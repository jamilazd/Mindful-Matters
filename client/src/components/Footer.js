import React from 'react'; 
import './Footer.css'; 
import guard from './guard.png'; 
import hw from './hw.png'; 
import psych from './psych.png'; 


const Footer = () => {
  return (
    <footer id="footer" className="container-fluid">
      <div className="trustLinks">
        <p>AS FEATURED IN:</p>
        <img className="col-sm-2" src={guard} alt="The Guardian Logo"></img>
        <img className="col-sm-2" src={hw} alt="Health and Wellbeing Logo"></img>
        <img className="col-sm-2" src={psych} alt="Psychology Today Logo"></img> 
      </div>
      <div id="bottomFooter">
        <p className="col-sm-3">©2021 All rights reserved.</p>     
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