import React from "react";
import PlaceIcon from '@mui/icons-material/Place';

import './Location.css'

const Location = () => (
  <div className="flex-container location">
    <PlaceIcon />
    <p>Bogotá, Colombia</p>
  </div>
);

export default Location;