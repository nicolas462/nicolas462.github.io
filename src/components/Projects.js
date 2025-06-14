import React from "react";

import './Projects.css';

const projectsData = {
  en: [
    {
      title: 'E-commerce stock synchronization',
      description: ['An application developed to synchronize stock between Mercado Libre Colombia ',
        'and Linio Colombia. Developed in NextJS using Glitch as server hosting and MySQL as database',
        ' using Railway Database services (currently working on migration to Spring Boot Java).'],
    },
    {
      title: "ETL Script in Excel using VBA",
      description: ["VBA scripts developed in Excel to extract information from other Excel sheets, transforming the ",
        "data and loading it into a master Excel workbook for an e-commerce accounting system."],
    },
    {
      title: 'Portfolio Website',
      description: 'This single web application that you are looking at right now! A personal website built with React and Bootstrap.',
    },
    {
      title: "Whatsapp integration to poll students' satisfaction",
      description: ["My graduation project! I did some research and found a problem: the college did",
        " not have enough information to measure the students' satisfaction during the classes. I developed",
        " a Python application using Flask and MySQL as database, to send a short three question poll after",
        " each class."],
    },
  ],
  es: [
    {
      title: 'Sincronización de stock de e-commerce',
      description: ['Una aplicación desarrollada para sincronizar el stock entre Mercado Libre Colombia y Linio',
        ' Colombia. Desarrollada en NextJS, utilizando Glitch como servidor y MySQL como base de datos, utilizando',
        ' los servicios de Railway Database (actualmente en proceso de migración a Spring Boot Java).'],
    },
    {
      title: "ETL Script en Excel usando VBA",
      description: ["Scripts de VBA desarrollados en Excel para extraer información de otras hojas de Excel, ",
        "transformando la información y cargándola en un libro maestro de Excel para un sistema de contabilidad de comercio electrónico."],
    },
    {
      title: 'Portafolio Web',
      description: '¡Esta aplicación web que estás viendo ahora mismo! Un sitio web personal creado con React y Bootstrap.',
    },
    {
      title: 'Integración de WhatsApp para encuestar la satisfacción de los estudiantes',
      description: ['¡Mi proyecto de graduación! Investigué y encontré un problema: la universidad no contaba con suficiente',
      ' información para medir la satisfacción de los estudiantes durante las clases. Desarrollé una aplicación en Python,',
      ' utilizando Flask y MySQL como base de datos, para enviar una breve encuesta de tres preguntas después de cada clase.'],
    },
  ],
};

const Projects = ({ language }) => {
  const projects = projectsData[language] || [];

  return (
    <div className="flex-container projects text-white contents">
      <div className={`lang-section ms-1 ${language === "en" ? "visible" : "hidden"}`}>
        <h2>My personal projects</h2>
      </div>
      <div className={`lang-section ms-1 ${language === "es" ? "visible" : "hidden"}`}>
        <h2>Mis proyectos personales</h2>
      </div>

      <ul className="list-unstyled mt-3 p-2 cont">
        {projects.map((project, index) => (
          <li key={index} className="mb-4 border-bottom pb-3">
            <h5 className="mb-1">{project.title}</h5>
            <p className="mb-0">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Projects;