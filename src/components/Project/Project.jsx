import React from "react";
import "./project.scss";

const Project = ({ link, img, name, desc }) => {
  return (
    
    <div className="project">
      <a href={link} target="_blank" rel="noreferrer">
      <div className="project-overlay">
        <h3 className="project-overlay-header">{name}</h3>
        <i>
          <p className="project-overlay-desc">{desc}</p>
        </i>
      </div>
      <img src={img} alt="" className="project-img" />
      </a>
    </div>
  );
};

export default Project;
