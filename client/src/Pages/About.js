import React from 'react'; 
import './About.css'; 
import MMLogo from './MMLogo.png';
import med from './med.jpg'; 
import woman2 from './woman2.jpg'; 
import woman3 from './woman3.png'; 
 

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
                  Mindful Matters provides information on the latest mental wellbeing news and resources.
                  You can also drop by anytime to access thoughtfully curated mindfulness videos.
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

