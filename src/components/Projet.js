import React from "react";
import datavize from "../images/datavize.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Projet.scss";
function Projet() {
  return (
    <div className="projets container">
      <div className="projets__titles">
        <div className="projets__lines">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>
        <div className="projets__title">
          <h2>projet titre</h2>
          <p>
            Qui ipsum veritatis quisquam magni quo necessitatibus. Ipsam sit aut
            quos. Occaecati quibusdam qui nam rerum praesentium sapiente
            reiciendis. Laborum quia autem ea. Veniam quibusdam culpa velit
            labore.…
          </p>
        </div>
      </div>

      <div className="projets__images">
        <img className="projets__image" src={datavize} alt="datavize" />
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
