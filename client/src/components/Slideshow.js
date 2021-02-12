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
            <p id="aboutP">
              Mindful Matters is on a mission to encourage steps towards better mental wellbeing, by 
              promoting mindfulness meditation. Mindfullness is the process of acknowledging your feelings 
              in the moment, without interruption or judgement. You can use Mindful Matters to learn the 
              basics of mindfulness practice, watch beginner friendly mindfulness meditation videos 
              and catch up on the latest mental wellbeing news from across the UK. 
            </p> 
          </div>
        </div>
      )
  };

export default Slideshow; 