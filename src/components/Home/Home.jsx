import React, { useEffect } from "react";
import ParticleBackground from "../ParticleBackground";
import "./home.scss";
import image from "../../imgs/ferit.jpg";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="h-left">
          <p className="h-left-introduce-text">Hi, This is Farid Asadli 👋</p>
          <div className="h-left-scrolling-words-container">
            <p>I am</p>
            <div className="h-left-scrolling-words-box">
              <span className="h-left-scrolling-words-box-item">Coder</span>
              <span className="h-left-scrolling-words-box-item">Editor</span>
              <span className="h-left-scrolling-words-box-item">Aton</span>
            </div>
          </div>
        </div>
        <div className="h-right">
          <img src={image}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
