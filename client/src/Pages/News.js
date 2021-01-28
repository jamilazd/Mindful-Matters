import React from 'react'; 
import './News.css'; 

const News = () => {
    return (
        <div className="container-fluid">
            <div id="newsBox" className="col">
                <h1 id="newsH">Get the Latest News</h1>
                <p id="newsP">
                    Here you can find the latest mental health and wellbeing news from 
                    across the UK. 
                </p>
                <hr />
            </div>
        </div>
    ); 
}

export default News; 