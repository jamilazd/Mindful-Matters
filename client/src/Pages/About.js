import React from 'react'; 
import './About.css';  
import MMLogo from '/Users/jd/Desktop/Mindful-Matters/client/src/Assets/MMLogo.png';
import med from '/Users/jd/Desktop/Mindful-Matters/client/src/Assets/med.jpg'; 
import woman2 from '/Users/jd/Desktop/Mindful-Matters/client/src/Assets/woman2.jpg'; 
import woman3 from '/Users/jd/Desktop/Mindful-Matters/client/src/Assets/woman3.png'; 
 

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



/* Fix fade carousel 
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="d-block w-100" src={med} alt="meditating woman" />
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={woman2} alt="meditating woman" /> 
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={woman3} alt="meditating woman" />
                  </div>
              </div> 
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </a>
            </div> 
            */ 




