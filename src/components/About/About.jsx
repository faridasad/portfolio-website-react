import React from "react";
import "./about.scss";
import image2 from "../../imgs/zort.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <img className="about-image" src={image2}></img>
        </div>
        <div className="about-right">
          <h1>About me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nam
            perferendis beatae molestiae odit harum sunt, deserunt amet
            explicabo minima velit veniam ratione nobis corrupti culpa
            blanditiis quasi quos iure!<br/><br/><br/>s
            Johnny El Bravoyam daşşağım on min ton
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
