import React from 'react';
import './Home.css'; 
import ReactPlayer from "react-player"; 


const Home = () => {
    return (
        <div id="home" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="tagline">
                      <h2 id="h2">Your Mind Matters </h2>
                      <br/>
                        <u>
                            <i id="italic"> Mindful Matters' mission is to encourage steps towards better mental wellbeing.</i>
                        </u>
                    </div>
                    <div id="vidContainer" className="col">
                       <div class="embed-responsive embed-responsive" id="videoPlayer">
                          <ReactPlayer url="https://www.youtube.com/watch?v=APX33ncDER0"/>  
                       </div>   
                  </div>  
               </div>
            </div>
        </div>
    ); 
    
}

export default Home; 

/*  

 



Have image card thing over the top of the feed and then feed below.
Feed will have to be created as a serepeate component and imported into the livefeed 
remame livefeed to Home - also change in the app.js 

*/ 
