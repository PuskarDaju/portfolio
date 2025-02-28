import React, { Component } from 'react';
import {Link, useLocation } from 'react-router-dom';
import about from "../assets/about.png";
import skills from "../assets/skills.png";
import contact from "../assets/contact.png";
import project from "../assets/project.png";

import "../Styles/Nav.css";

export default function Nav() {
    const location = useLocation();

    const getNavPositionClass=()=>{
        switch(location.pathname){
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
                default:
                    return "";
        }
    }

        const getPageTitle=()=>{
            switch(location.pathname){
                case "/":
                    return "ABOUT";
                case "/skills":
                    return "SKILLS";
                case "/projects":
                    return "PROJECT";
                case "/contact":
                    return "CONTACT";
                    default:
                        return "";
            }

    }
    const navPositionClass=getNavPositionClass();
    const pageTitle=getPageTitle();

    const isCurrentPage=(navClass)=>{
        return navClass===navPositionClass;
    }
    const renderNavLink=(to,imgSrc,altText,navClass)=>{
        const isCurrent=isCurrentPage(navClass);
        const linkClass=isCurrent?"nav-link current":"nav-link";

        return (
            <Link to={to} className={linkClass}>
            <img src={imgSrc} alt={altText}/>
            {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
            </Link>
        );
    }

        return(
         <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/",
                about,
                "astronaout-helmet Icon",
                'nav-about'
            )}
            {renderNavLink(
                "/skills",
                skills,
                "DeadEye Icon",
                'nav-skills'
            )}
            {renderNavLink(
                "/projects",
                project,
                "Stack Icon",
                'nav-projects'
            )}
            {renderNavLink(
                "/contact",
                contact,
                "envelop Icon",
                'nav-contact'
            )}

         </nav>
        )}
  
