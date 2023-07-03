import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Projet.scss";
function Projet({ title, projectImg, subtitle, vercel, github }) {
  return (
    <div className="projets container" id="projet">
      <div className="projets__titles">
        <div className="projets__lines">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>
        <div className="projets__title">
          <h2>{title}</h2>
          <p>{subtitle.decription}</p>
          <p>
            {subtitle.titleVercel}
            <a
              href={subtitle.linkVercel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vercel}
            </a>
            <span> {subtitle.erre} </span>
          </p>
          <p>
            {subtitle.titleGit}
            <a
              href={subtitle.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>
          </p>
        </div>
      </div>

      <div className="projets__images">
        <img className="projets__image" src={projectImg} alt="datavize" />
      </div>

      <div className="space container">
        <div className="lines">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Projet;
