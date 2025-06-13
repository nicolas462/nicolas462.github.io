import React from "react";
import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';

import './Location.css'

const Location = ({ language }) => (
  <>
    <div className={`flex-container icon education lang-section ${language === "en" ? "visible" : "hidden"}`}>
      <SchoolIcon />
      <p>Systems Engineer</p>
    </div>
    <div className={`flex-container icon education lang-section ${language === "es" ? "visible" : "hidden"}`}>
      <SchoolIcon />
      <p>Ingeniero de Sistemas</p>
    </div>
    <div className="flex-container icon">
      <PlaceIcon />
      <p>Bogotá, Colombia</p>
    </div>
  </>
);

export default Location;