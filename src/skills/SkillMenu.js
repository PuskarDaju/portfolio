import React, { Component } from "react";
import classNames from "classnames";
import "../Styles/Skills.css";
import frontend from "../assets/hawk-emblem.png";
import backend from "../assets/eagle-emblem.png";
import Skills from "./SkillData";


export default class SkillMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1, // Start with Front-End (index 1)
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({ activeMenuItem: menuItem });
  };

  renderContent(skillData) {
    return (
      <div className="skill-sub-container">
        {skillData.map((skill, index) => (
          <div key={index} className={`skill-item-container skill-item-${index}`}>
            <div className="skillTitile">
            <h3>{skill.title}</h3>
            </div>
           
            <div className="level-container">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["Front-End", "Back-End"];
    const currentIcon = activeMenuItem === 1 ? frontend : backend;

    return (
 
      <div className="skills-menu">
        {menuItems.map((item, index) =>(
          
          <div
            key={index}
            className={classNames("skill-item", { activeSkills: activeMenuItem === index + 1 })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <div className="skill-title">
              <h2>{item}</h2>
            </div>
            </div>
          )
        )}
        
            <img className="skill-icon" src={currentIcon} alt="current-skill" />
           
           <div>
            
           {this.renderContent(Skills[activeMenuItem-1])}
           </div>
           </div>
        
          
            
      );
        
      }
  
}
