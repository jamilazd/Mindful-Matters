import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import TaglineCard from './components/TaglineCard'; 
import VideoText from './components/VideoText'; 
import Home from './pages/Home';
import starterVideos from './models/starterVideos.json';
import Video from './pages/Video'; 
import About from './pages/About'; 
import Quiz from './pages/Quiz'; 
import Privacy from './pages/Privacy'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = (Props) => {
  
  const [ videos, setVideo ] = useState(starterVideos); 
  
  return (
    <BrowserRouter>
      <Header />
        <Route exact path="/" render={() => (
          <>
           <TaglineCard />
           <Home />
           <Footer />
          </>
        )} />
        <Route exact path="/Video" render={() => (
         <>
           <VideoText />
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
            <TaglineCard />
            <About/>
            <Footer />
          </>
        )} />
        <Route exact path="/Privacy" render={() => (
          <>
            <Privacy />
            <Footer />
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;


  


