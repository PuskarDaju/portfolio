import React, { Component } from 'react';
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "../about/AboutMenu";



export default class About extends Component {
  render() {
    return (
      <>
       <Avatar page="about"/>
       {<AboutMenu/>}
     
      </>
    );
  };
}
