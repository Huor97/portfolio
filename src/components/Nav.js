import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";
function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };
  console.log(toggleMenu);
  return (
    <div className={`nav ${toggleMenu && "show"} `}>
      <div className="nav__logo">logo</div>

      <button className="nav__burger" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className="nav__links">
        <a href="/" className="nav__link">
          présentation
        </a>
        <a href="/" className="nav__link">
          projet
        </a>
        <a href="/" className="nav__link">
          compétence
        </a>
        <a href="/" className="nav__link">
          contact
        </a>
      </nav>
    </div>
  );
}

export default Nav;
