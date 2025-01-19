import React, { Component } from 'react';
import AboutMenuHeading from "./AboutMenuHeading";
import AboutMenuHeadingsData from "./AboutMenuHeadingsData";
import AboutMenuItems from "./AboutMenuItems";
import PersonalIcon from "../assets/moebius-triangle.png";
import EducationIcon from "../assets/upgrade.png";
import CareerIcon from "../assets/triple-corn.png";
import "../Styles/AboutMenu.css";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1, // Tracks the active menu item
      activeMenuHeading: 1, // Tracks the active subheading
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeMenuHeading: 1, // Reset subheading when menu changes
    });
  };

  handleMenuHeadingClick = (menuHeading) => {
    this.setState({
      activeMenuHeading: menuHeading,
    });
  };

  render() {
    const { activeMenuHeading, activeMenuItem } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? PersonalIcon
        : activeMenuTitle === "EDUCATION"
        ? EducationIcon
        : CareerIcon;

    const MenuHeadingsData = AboutMenuHeadingsData[activeMenuItem] || []; // Ensure data is valid

    return (
      <>
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItems
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)} // Corrected typo
            />
          ))}
        </div>

        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} />
            <h3 className='subcontainer-title'>{activeMenuTitle}</h3>
          </div>

         
            {MenuHeadingsData.map((menuHeading, index) => (
              <AboutMenuHeading
                key={index} // Unique key for each mapped element
                menuItem={activeMenuTitle}
                title={menuHeading.title}
                content={menuHeading.content}
                active={activeMenuHeading === index + 1}
                onClick={() => this.handleMenuHeadingClick(index + 1)} // Corrected typo
              />
            ))}
          </div>
      
      </>
    );
  }
}
