import React from "react";
import classNames from "classnames";

const AboutMenuHeading = ({ menuItem, title, content, active, onClick }) => {
  const subcontainerClass=`sub-container-${menuItem}`;
  return (
    <div
      className={classNames(subcontainerClass,{"active-menuHeading":active})}
    >
      <h3 onClick={onClick}>{title}</h3>
     <div className="p-container">
      {content}
      
     </div>
    </div>
  );
};

export default AboutMenuHeading;
