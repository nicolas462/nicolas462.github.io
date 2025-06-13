import React, { useState } from "react";
import Header from "./components/Header";
import Location from "./components/Location";
import LanguageIcons from "./components/LanguageIcons";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <Header />
      <Location />
      <LanguageIcons language={language} setLanguage={setLanguage} />
      <About language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer />
    </>
  );
}

export default App;
