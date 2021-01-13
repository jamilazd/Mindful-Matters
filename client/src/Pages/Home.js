import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom'; 
import ReactPlayer from "react-player"; 
import MMLogo from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/MMLogo.png';


const Home = () => {
    return (
        <div id="home" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="homeMessage">
                       <h2 className="homeHead">Be Kind To Yourself</h2>
                       <p id="homeP">
                           Mindfulness. It all starts with just a few minutes a day.
                           Reduce stress and build mental resilience.  
                           <img className="img-fluid" id="MMLogo4" src={MMLogo} alt="Brand Logo" />
                       </p>
                       <hr />
                       <nav>
                            <Link id="homeLink" className="nav-link" to="/Video">Start Your Journey</Link>
                        </nav>
                    </div>
                    <div id="vidContainer" className="col">
                       <div class="embed-responsive embed-responsive" id="videoPlayer">
                          <ReactPlayer url="https://www.youtube.com/watch?v=APX33ncDER0"/>  
                       </div>   
                  </div>  
                  <div id="homeStories">
                      <h2 className="homeHead">
                          Mindful Matters Stories 
                      </h2>
                  </div>
                  
                       
               </div>
            </div>
        </div>
    ); 
    
}

export default Home; 

/*  
<div className="container">

<div className="card" >
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div> 
                  </div>   




</div>
 



Have image card thing over the top of the feed and then feed below.
Feed will have to be created as a serepeate component and imported into the livefeed 
remame livefeed to Home - also change in the app.js 

*/ 
