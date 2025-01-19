import React, { Component } from 'react';
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import insta from "../assets/insta.png"; 
import "../Styles/contact.css";

export default class contact extends Component {
  render() {
    return (
      <div className='mainContact'>

        <div className='Heading '>
          <h1>Contact me</h1>
        </div>
        <div className='iconContainer'>
          
       
     <div className='iconWrapper'>
        <img src={facebook} alt='facebook'></img>
      <a href="https://www.facebook.com/profile.php?id=61551517342366"> Facebook</a>
     </div>
     <div className='iconWrapper'>
        <img src={insta} alt='Instagram'></img>
       <a href='https://www.instagram.com/scriptedbypuskar'>Instagram</a>
     </div>
     <div className='iconWrapper'>
        <img src={email} alt='Email'></img>
       <a href='mailto:puskarniroula8@gmail.com'>Email</a>
     </div>
     </div>

      </div>
    )
  }
}
