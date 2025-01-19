import React from 'react';
import "../Styles/ProfileStat.css";


const ProfileStatus = () => {
    return (
        <div className="profile_info">
            <h1 id="profile_name">Puskar Niroula</h1>
            
            <div id="status_lines">
                <span id="thick_lines"></span>
                <span id="thin_lines"></span>    
            </div>  
            <div>
                <h2>Full Stack Developer</h2>
            </div>      
        </div>
    );
};

export default ProfileStatus;
