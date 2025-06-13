import React from "react";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css';

const Contact = ({ language }) => (
  <div className="flex-container contactme">
    <div className={`lang-section ${language === "en" ? "visible" : "hidden"}`}>
      <h2>Contact me</h2>
    </div>
    <div className={`lang-section ${language === "es" ? "visible" : "hidden"}`}>
      <h2>Contáctame</h2>
    </div>
    <div className="flex-container">
      <EmailIcon id="email"/>
      <a href="mailto:nicolas462@hotmail.com">nicolas462@hotmail.com</a>
    </div>
    <div className="flex-container social">
      <a href="https://github.com/nicolas462/" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-david-espejo-bernal/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
  </div>
);

export default Contact;