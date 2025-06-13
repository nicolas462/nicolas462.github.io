import React from "react";
import englandIcon from "../assets/england.png";
import spainIcon from "../assets/spain.png";

import './LanguageIcons.css';

const LanguageIcons = ({ language, setLanguage }) => (
  <div className="flex-container language">
    <img
      id="england"
      src={englandIcon}
      alt="English"
      onClick={() => setLanguage("en")}
      style={{ opacity: language === "en" ? 1 : 0.3, cursor: "pointer" }}
    />
    <img
      id="spain"
      src={spainIcon}
      alt="Spanish"
      onClick={() => setLanguage("es")}
      style={{ opacity: language === "es" ? 1 : 0.3, cursor: "pointer" }}
    />
  </div>
);

export default LanguageIcons;
