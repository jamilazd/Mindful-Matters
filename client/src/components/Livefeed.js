import React from 'react';
import './Livefeed.css'; 

const Livefeed = () => {
    return (
        <div id="livefeed" className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="tagline">
                      <h2 id="h2">Your Mind Matters </h2>
                      <br/>
                        <u>
                            <i id="italic"> Mindful Matters' mission is to encourage steps towards better mental wellbeing.</i>
                        </u>
                    </div>
                    <div className="welcomeMessage">
                      <u><h3 id="welcomeHead">Welcome to Mindful Matters</h3></u>
                      <p id="welcomeP">
                         Mindfulness focuses on being aware of your feelings in the moment, without interruption. 
                      </p>
                    </div>
               </div>
            </div>
        </div>
    ); 
    
}

export default Livefeed; 

/*  

<p> Mindfulness focuses on being aware of your feelings in the moment, without interruption.</p>
Have heading over livefeed <h2>Latest Wellbeing news</h2>
{
        "thumbnail":"./vidImage1.png",
        "videoName": "Mindfulness: What is it? BBC News",
        "author": "BBC News", 
        "durationInMins": 7.53,
        "description": "An introduction to mindfulness and how it can help with managing stress, mental illness and chronic pain",
        "videoLink":"https://www.youtube.com/watch?v=Se971VQf8w8"
    },



*/ 
