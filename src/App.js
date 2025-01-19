import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skill from "./skills/Skill";
import Contact from "./contact/contact";
import Project from "./projects/Project.js";
import "./Styles/App.css";
import Background from "./background/Background.js";
import Profile from "./info/ProfileInfo";


const App=()=>{
  return (
  <>
   <Background/>
  <Router>
    <Nav/>
   
    <Profile/>
   
    <Routes>
      <Route path="/" element=<About/> />
      <Route path="/skills" element=<Skill/> />
      <Route path="/projects" element=<Project/> />
      <Route path="/contact" element=<Contact/> />
      
      
      </Routes>
      
      
  </Router>
 
  
    
  </>
  );
};

export default App;
