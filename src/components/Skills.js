import React from "react";

import './Skills.css';

const skillsData = [
    ["English", 80],
    ["Java", 80],
    ["Spring Boot", 80],
    ["Prompt Engineering", 80],
    ["Amazon Web Services (AWS)", 70],
    ["Javascript", 70],
    ["ReactJS", 70],
    ["VBA", 70],
    ["SQL", 70],
    ["NextJS", 50],
    ["Python", 50],
    ["Flask", 50],
    ["Bash", 50],
    ["PHP", 40],
    ["C++", 40],
  ];

const Skills = ({ language }) => (
  <div className="flex-container statistics">
    <div className={`lang-section ${language === "en" ? "visible" : "hidden"}`}>
      <h2>My skills</h2>
    </div>
    <div className={`lang-section ${language === "es" ? "visible" : "hidden"}`}>
      <h2>Mis habilidades</h2>
    </div>
    <table className="skills-table">
      <tbody>
        {skillsData.map(([skill, percent]) => (
          <tr key={skill}>
            <td className="first-col-skills">
              <p>{skill}</p>
            </td>
            <td>
              <div className="bar">
                <div
                  className={`skills ${skill.toLowerCase().replace(/\+\+/, "pp")}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </td>
            <td style={{ width: "15%", textAlign: "right" }}>
              <p>{percent}%</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <br />
  </div>
);

export default Skills;