import React, { Component } from 'react';
import projects from './ProjectsData';
import "../Styles/ProjectsMenu.css";
import classNames from 'classnames';

export default class ProjectsMenu extends Component {

    constructor(props){
        super(props);
        this.state={
            activeProject:1,
        };
    }

    handleProjectClick=(project)=>{
        this.setState({
            activeProject:project,
        });
    };

    renderContent = (projects) => {
        return projects.map((project, index) => (
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} />
                <div>{project.description}</div>
                <div className="link-container">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                   
                </div>
            </div>
        ));
    };
    

    render(){
        const {activeProject}=this.state;
        const projectItems=["Project One","Project Two","Project Three"];
        return(
        <div className="project-menu">
            <div className='Project-item-container'>
                {projectItems.map((item,index)=>(
                    <div key={index} 
                    className={classNames("project-item" ,{activeProject : activeProject===index+1,})}
                    onClick={()=>this.handleProjectClick(index+1)}>
                        <h2 className='title'>{item}</h2>
                    </div>
    ))}
                </div>
                <div className='project-sub-container'>
                      {this.renderContent([projects[activeProject]])}
                  </div>
        </div>
        );
    }
  }

