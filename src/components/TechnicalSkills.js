import React from "react";
import "./TechnicalSkills.scss";

const skillsTechs = [
  {
    title: "projet/conception",
    skills: ["MVP", "Trello", "Miro", "UML", "Figma"],
  },
  {
    title: "Front End",
    skills: [
      "HTML/CSS/JavaScript",
      "React, React Native",
      "tailwindcss, SCSS",
      "styled-components",
    ],
  },
  {
    title: "Back End",
    skills: ["NodeJS", "PostgreSQL, MySQL"],
  },
  {
    title: "OS/Version",
    skills: ["Linux Debian, Fedora", "Git, GitHub"],
  },
];
function TechnicalSkills() {
  return (
    <div className="skillsT">
      <div className="skillsT__title">
        <h2>COMPÉTENCES TECHNIQUES</h2>
      </div>
      <div className="skilsT__names">
        {skillsTechs.map((skillsTech, index) => (
          <div className="skilsT__name" key={index}>
            <h3 className="skils__title">{skillsTech.title}</h3>
            <ul className="skils__lists">
              {skillsTech.skills.map((skills) => (
                <li className="skils__list"> {skills} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkills;
