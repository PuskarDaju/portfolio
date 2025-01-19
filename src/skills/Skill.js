import React, { Component } from 'react';
import Avatar from "../avatar/Avatar.js";
import SkillMenu from "./SkillMenu.js";



export default class About extends Component {
  render() {
    return (
      <>
    
     <div>
     <Avatar page="skills"/>
     </div>
      {<SkillMenu/>}
      </>
    );
  };
}
