import React from "react";
import { projects } from "../../data/projects";
import Project from "../Project/Project";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-wrapper">
        <h1>Projects</h1>
        <div className="projects-cards-container">
          {projects.map((project) => {
            return (
              <Project
                link={project.link}
                key={project.id}
                img={project.img}
                name={project.name}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
