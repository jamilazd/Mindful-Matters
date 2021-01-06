import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Livefeed from './components/Livefeed';
import starterVideos from './models/starterVideos.json'; 
import Video from './components/Video'; 
import About from './Pages/About'; 
import Quiz from './components/Quiz'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = (Props) => {
  
  const [ videos, setVideo ] = useState(starterVideos); 
  
  return (
    <BrowserRouter>
      <Header />
        <Route exact path="/" render={() => (
          <>
           <Livefeed />
           <Footer />
          </>
        )} />
        <Route exact path="/Video" render={() => (
         <>
           {videos.map((video) => <Video video={video} />)}
          </>
        )} />
        <Route exact path="/Quiz" render={() => (
          <>
            <Quiz/>
          </>
        )} />
        <Route exact path="/About" render={() => (
          <>
            <About/>
            <Footer />
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;


  


