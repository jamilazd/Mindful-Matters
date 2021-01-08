import React from 'react'; 
import './Quiz.css'; 
import MMLogo from '/Users/jd/Desktop/Mindful-Matters/client/src/Assets/MMLogo.png'; 


const Quiz = () => {
    return (
       <div className="container-fluid">
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
            <div className="col"  id="explainQuiz">
                <u><h2 id="QuizHead">Mindfulness Quiz</h2></u>
                <p id="QuizP">
                    Welcome to the Mindful Matters Quiz. You can use this quiz to get a snapshot of your 
                    mental wellbeing. If you are concerned about your mental health, please see your General Practitoner 
                    or a lisenced Mental Health Professional. 
                    <img className="img-fluid" id="MMLogo2" src={MMLogo} alt="Brand Logo" />
                </p>
            </div>
       </div>
       
    ); 
}

export default Quiz; 