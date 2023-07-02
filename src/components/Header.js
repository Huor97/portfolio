import React from "react";
import "./Header.scss";
import Resume from "../images/karimi_alternance_CV_dévelppeur full stack_2023-2024.pdf";

function Header() {
  return (
    <header className="banner">
      <div className="banner__presention">
        <div className="vertical">
          <div className="vertical__line"></div>
        </div>

        <div className="banner__titles">
          <h1>Rouhllah karimi</h1>
          <p>Software Developer en formation chez</p>
          <p className="banner__subtitle">Ada Tech School</p>
        </div>
      </div>

      <div className="banner__cv">
        <div className="vertical">
          <div className="vertical__icon">
            <p>CV</p>
          </div>
          <div className="vertical__line"></div>
        </div>

        <div className="vertical__cv">
          <a href={Resume} download>
            <input
              type="submit"
              value="Télécharger ici"
              className="vertical__button"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
