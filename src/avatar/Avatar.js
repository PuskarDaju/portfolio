import React from "react";
import propTypes from "prop-types";
import AvatarImage from "../assets/puskar.png";
import "../Styles/avatar.css";

const Avatar=({page})=>{
    const avatarClass=`avatar ${page}`;
    const spanClass=`shadow-overlay-${page}`;

    return(
        <>
        <span className={spanClass}>
            <img src={AvatarImage} className={avatarClass} alt="No-Image"/>
        </span>

        </>
    );
};

Avatar.propTypes = {
    page: propTypes.string.isRequired,
}

export default Avatar;