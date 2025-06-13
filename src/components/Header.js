import React from "react";
import "./Header.css";

import photo from "../assets/photo.JPG";

const Header = () => (
  <header className="text-white position-relative text-center">
  <h1>Nicolas David <br/> Espejo Bernal</h1>
  <p>Full Stack Cloud Web Developer</p>
  <div className="profile-image-wrapper">
    <img
      src={photo}
      alt="Profile"
      className="profile-image"
    />
  </div>
</header>
);

export default Header;