import React from 'react'; 
import './About.css';  
import MMLogo from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/MMLogo.png';
import med from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/med.jpg'; 
import woman2 from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/woman2.jpg'; 
import woman3 from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/woman3.png'; 
 

const About = () => {
    return (
        <div id="box" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="tagline">
                      <h2 id="h2">Your Mind Matters </h2>
                      <br/>
                        <u>
                            <i id="italic"> Mindful Matters' mission is to encourage steps towards better mental wellbeing.</i>
                        </u>
                    </div>
               </div>
            </div>
            <div id="explain" className="col">
               <h3 id="aboutHead">About</h3>
               <p id="aboutP">
                  Mindful Matters is on a mission to encourage steps towards better mental wellbeing, by 
                  promoting Mindfulness Meditation. Mindfullness is the process of acknowledging your feelings 
                  in the moment, without interruption or judgement. You can use Mindful Matters to learn the 
                  basics of Mindfulness and catch up on the latest mental wellbeing news. 
                  <img className="img-fluid" id="MMLogo" src={MMLogo} alt="Brand Logo" />
               </p> 
            </div>
            <div className="col" id="photos">
              <img className="img-fluid" id="woman1" src={med} alt="meditating woman" />
              <img className="img-fluid" id="woman2" src={woman2} alt="meditating woman" />
              <img className="img-fluid" id="woman3" src={woman3} alt="meditating woman" />
            </div>
            
        </div>
    );
}

export default About; 








