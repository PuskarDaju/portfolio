import React from "react";
import "../Styles/Background.css";
import Video from "../assets/lighting.mp4";
import Fallback from "../assets/fallback.jpg";

const Background=()=>{
    return(
    <>
    <div className="shadow-overlay"></div>
    <video
    playsInline
    autoPlay
    loop
    muted
    preload="auto"
    id="bg"
    poster={<Fallback/>}
    >
        <source src={Video} type="video/mp4"></source>
    </video>
    </>
    );
};
export default Background;