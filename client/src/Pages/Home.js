import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom'; 
import ReactPlayer from "react-player"; 
import MMLogo from '/Users/jd/Desktop/Mindful-Matters/client/src/assets/MMLogo.png';

const Home = () => {
    return (
        <div className="container-fluid" id="contain">
            <div className="row">
                <div className="col">
                    <div id="homeMessage">
                       <h2 className="homeHead">Be Kind To Yourself!</h2>
                       <p id="homeP">
                           It all starts with just a few minutes a day to begin reducing stress and building
                           mental resilience. Mindfulness really is for everyone! You can try one of our mindfulness videos 
                           and start learning how to incorporate Mindfulness practice into your life. 
                           <img className="img-fluid" id="MMLogo4" src={MMLogo} alt="Brand Logo" />
                       </p>
                       <nav>
                            <Link id="homeLink"  to="/Video">Start Your Journey</Link>
                        </nav>
                    </div>
                    <div id="vidContainer">
                       <div className="embed-responsive embed-responsive" id="videoPlayer">
                          <ReactPlayer url="https://www.youtube.com/watch?v=APX33ncDER0"/>  
                       </div>   
                  </div>  
                  <div>
                      <h2 id="homeStories">
                          Mindful Matters Stories 
                      </h2>
                  </div>  
               </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="moveCard">
                       <div className="card" >
                           <div className="card-body">
                              <h1 className="card-title">"</h1>
                               <p className="card-text">
                                  Mindful Matters really helped me to kickstart my mental wellbeing journey.
                              </p> 
                              <h2 className="user"> - Amala Khan</h2>   
                           </div>
                       </div>
                    </div> 
                </div>
                <div className="col-sm">
                   <div className="moveCard">
                       <div className="card">
                           <div className="card-body">
                              <h1 className="card-title">"</h1>
                               <p className="card-text">
                                  Since I started watching your mindfulness videos, I've felt less stressed in my day to day.
                               </p>  
                               <h2 className="user"> - Shaun McTee</h2> 
                           </div>
                       </div> 
                   </div>
                </div>
                <div className="col-sm">
                    <div className="moveCard">
                       <div className="card">
                           <div className="card-body">
                              <h1 className="card-title">"</h1>
                               <p className="card-text">
                                  I learnt a lot about Mindfulness and how I can use it to reduce anxiety. 
                              </p>
                              <h2 className="user"> - Paula Reese </h2>      
                          </div>
                       </div>
                    </div> 
                </div>
            </div>
        </div>
    ); 
    
}

export default Home; 



   
        
    
