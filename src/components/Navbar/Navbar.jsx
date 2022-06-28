import React from "react";
import "./navbar.scss";
import { Download } from '@mui/icons-material'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-name">
        <a href="#home">
          <h3>Farid Asad</h3>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <button className="resume-button">Resume <span><Download /></span></button>
    </header>
  );
};

export default Navbar;
