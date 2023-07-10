import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo3.svg";
import { Link as ScrollLink } from "react-scroll";
import "./Nav.scss";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <div
      className={`nav ${toggleMenu && "show"} ${
        toggleMenu ? "nav--black" : "nav--transparant"
      } `}
    >
      <div className="nav__logo">
        <a href="/">
          <img src={logo} alt="r logo" width="50px" />
        </a>
      </div>

      <button className="nav__burger" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className="nav__links">
        <ScrollLink
          to="projet"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="nav__link"
        >
          Projet
        </ScrollLink>

        <ScrollLink
          to="experinece"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="nav__link"
        >
          Expérience
        </ScrollLink>
        <ScrollLink
          to="competence"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="nav__link"
        >
          Compétence
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav__link"
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
}

export default Nav;
