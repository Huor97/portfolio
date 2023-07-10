import React from "react";

import "./DescriptionProjet.scss";
function DescriptionProjet({ skillsTechs, title }) {
  return (
    <div className="projet">
      <div className="projet__title">
        <h2>{title}</h2>
      </div>
      <div className="projet__names">
        {skillsTechs.map((tabTitleSkill, index) => (
          <div className="projet__name" key={index}>
            <h3 className="projet__title">{tabTitleSkill.title}</h3>
            <ul className="projet__lists">
              {tabTitleSkill.skills.map((skills, index) => (
                <li className="projet__list" key={index}>
                  {" "}
                  {skills}{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionProjet;
