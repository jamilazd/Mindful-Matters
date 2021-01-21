import React from 'react'; 
import './About.css';  
 

const About = () => {
    return (
        <div className="container-fluid">
            <div id="explain" className="col">
               <h2 id="aboutHead">About</h2>
               <p id="aboutP">
                  Mindful Matters is on a mission to encourage steps towards better mental wellbeing, by 
                  promoting Mindfulness Meditation. Mindfullness is the process of acknowledging your feelings 
                  in the moment, without interruption or judgement. You can use Mindful Matters to learn the 
                  basics of Mindfulness and catch up on the latest mental wellbeing news. 
                  <img className="img-fluid" id="MMLogo" src="http://localhost:5000/static/MMLogo.png" alt="Brand Logo" />
               </p> 
            </div>
            <div className="col" id="photos">
              <img className="img-fluid" id="woman1" src="http://localhost:5000/static/med.jpg" alt="meditating woman" />
              <img className="img-fluid" id="woman2" src="http://localhost:5000/static/woman2.jpg" alt="meditating woman" />
              <img className="img-fluid" id="woman3" src="http://localhost:5000/static/woman3.jpg" alt="meditating woman" />
            </div>
        </div>
    );
}

export default About; 








