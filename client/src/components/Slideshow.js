import React from 'react'; 
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'; 


const slideImages = [
    "http://localhost:5000/static/med.jpg",
    "http://localhost:5000/static/woman2.jpg",
    "http://localhost:5000/static/woman3.jpg"
  ];
  
  const Slideshow = () => {
      return (
        <div >
          <div id="background" className="col">
            <p id="missionStatement">Our mission is to help you take steps towards better mental wellbeing</p>
            <Slide easing="ease">
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
              </div>
            </Slide>
          </div>
        </div>
      )
  };

export default Slideshow; 