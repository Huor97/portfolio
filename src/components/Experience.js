import React from "react";
import "./Experience.scss";
function Experience({
  title,
  subtitl,
  borderBottom,
  backgroundColor,
  logo,
  date,
  titleEx,
}) {
  return (
    <div className="experiences" id="experinece">
      <div className="experiences__title">
        <h2 style={borderBottom}>{title}</h2>
      </div>
      <div className="experiences__containers" style={backgroundColor}>
        <div className="experiences__date">
          <span>{date}</span>
        </div>
        <div className="experiences__container">
          <div className="experiences__images">
            <div className="experiences__image">
              <img
                className="experiences__logo"
                src={logo}
                alt="entrepris icon"
              />
            </div>
            <h2 className="titles--mobile">{titleEx}</h2>
          </div>
          <div className="experiences__titles">
            <h2 className="titles--web">{titleEx}</h2>
            <p>{subtitl}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
