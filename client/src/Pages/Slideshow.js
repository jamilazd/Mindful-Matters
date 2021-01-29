import React from 'react'; 
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'; 


const slideImages = [
    "http://localhost:5000/static/med.jpg",
    "http://localhost:5000/static/woman2.jpg",
    "http://localhost:5000/static/woman3.png"
  ];
  
  const Slideshow = () => {
      return (
        <div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              </div>
            </div>
          </Slide>
        </div>
      )
  };

export default Slideshow; 