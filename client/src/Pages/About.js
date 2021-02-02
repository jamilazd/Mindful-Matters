import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './About.css';  

const About = () => {
    return (
        <div >
            <div id="explain" className="col">
               <h1 id="aboutHead">About Us</h1>
               <p id="aboutP">
                  Mindful Matters is on a mission to encourage steps towards better mental wellbeing, by 
                  promoting mindfulness meditation. Mindfullness is the process of acknowledging your feelings 
                  in the moment, without interruption or judgement. You can use Mindful Matters to learn the 
                  basics of mindfulness practice, watch beginner friendly mindfulness meditation videos 
                  and catch up on the latest mental wellbeing news from across the UK. 
               </p> 
            </div>
        </div>
    );
}

export default About; 


/* 
   <nav>
      <Link className="nav-link" id="navPrivacy" to="/Privacy">Privacy</Link>
   </nav>

*/






