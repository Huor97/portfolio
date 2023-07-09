import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import datavizeMobilAcuil from "../images/datavize_mobil_acuil.jpg";
import datavizePcAcuil from "../images/plus info netflix clone.png";
import "./Projet.scss";
function Projet({ title, projectImg, subtitle, vercel, github }) {
  return (
    <div className="projets" id="projet">
      <div className="projets__titles">
        <div className="projets__lines">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>

        <div className="projets__title">
          <h2>{title}</h2>
          <p>
            {subtitle.decription}{" "}
            <a
              href={subtitle.linkVercel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vercel}
            </a>
            <span> {subtitle.erre} </span>
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

      <div className="projets__box">
        <div className="projets__container">
          <div className="projets__tols">
            <h2>
              <b id="react__title"> React +</b> <b id="scss__title">SCSS</b>
            </h2>
          </div>

          <div className="projets__images">
            <div className="projets__imagepc">
              <img src={datavizePcAcuil} alt="datavize" width="100%" />
            </div>
            <div className="projets__imagemobil">
              <div className="imagemobil__container">
                <img
                  src={datavizeMobilAcuil}
                  alt="datavize"
                  width="100%"
                  height="200px"
                />
              </div>
            </div>
          </div>
        </div>
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
