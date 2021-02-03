import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom'; 
import ReactPlayer from "react-player"; 



const Home = () => {
    return (
        <div id="contain">
            <div className="row">
                <div className="col">
                    <div className="topBox">
                       <h1 id="headHome">Be Kind to Yourself</h1>
                    </div>
                    <div id="pBox">
                        <p id="homeP">
                           It all starts with just a few minutes a day to begin reducing stress and building
                           mental resilience. Mindfulness really is for everyone! You can try one of our mindfulness videos 
                           and start learning how to incorporate mindfulness into your life. 
                       </p>
                       <nav  id="navLink">
                          <Link id="Link"  to="/VideoPage">Start Your Journey with Mindful Matters</Link>
                        </nav>
                  </div>
                    <div id="vidContainer">
                       <div className="embed-responsive embed-responsive" id="videoPlayer">
                          <ReactPlayer url="https://www.youtube.com/watch?v=APX33ncDER0"/>  
                       </div>   
                  </div>  
                  <hr className="hrStyle" />
                  <h2 id="h2Stories">
                        Mindful Matters Stories 
                  </h2>
               </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="moveCard">
                       <div className="card" >
                           <div className="card-body">
                              <h1 className="card-title">“</h1>
                               <p className="card-text">
                                  Mindful Matters really helped me to kickstart my mental wellbeing journey.
                              </p> 
                              <h2 className="user">Amala Khan</h2>   
                           </div>
                       </div>
                    </div> 
                </div>
                <div className="col-sm">
                   <div className="moveCard">
                       <div className="card">
                           <div className="card-body">
                              <h1 className="card-title">“</h1>
                               <p className="card-text">
                                  Since I started watching your mindfulness videos, I've felt less stressed in my day to day.
                               </p>  
                               <h2 className="user">Shaun McTee</h2> 
                           </div>
                       </div> 
                   </div>
                </div>
                <div className="col-sm">
                    <div className="moveCard">
                       <div className="card">
                           <div className="card-body">
                              <h1 className="card-title">“</h1>
                               <p className="card-text">
                                  I learnt a lot about Mindfulness and how I can use it to reduce anxiety. 
                              </p>
                              <h2 className="user">Paula Reese </h2>      
                          </div>
                       </div>
                    </div> 
                </div>
            </div>
        </div>
    ); 
    
}

export default Home; 



   
        
