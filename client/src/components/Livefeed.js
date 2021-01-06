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
               </div>
            </div>
        </div>
    ); 
    
}

export default Livefeed; 

/*  
Have a video at the top to the right, explaining what Mindfulness is. 

{
        "thumbnail":"./vidImage1.png",
        "videoName": "Mindfulness: What is it? BBC News",
        "author": "BBC News", 
        "durationInMins": 7.53,
        "description": "An introduction to mindfulness and how it can help with managing stress, mental illness and chronic pain",
        "videoLink":"https://www.youtube.com/watch?v=Se971VQf8w8"
    },



*/ 
