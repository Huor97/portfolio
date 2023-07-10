import React from "react";
import logo from "../images/logo3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithubAlt,
  faStackOverflow,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Footer.scss";
import TechnicalSkills from "./TechnicalSkills";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  library.add(faTwitter, faGithubAlt, faStackOverflow, faLinkedinIn);
  return (
    <div className="container">
      <Contact />
      <TechnicalSkills />

      <div className="social__networks">
        <a
          href="https://twitter.com/k_huor"
          className="social__network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a
          href="https://github.com/Huor97"
          className="social__network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github-alt" />
        </a>
        <a
          href="https://stackoverflow.com/users/14062365/roho"
          className="social__network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
        </a>
        <a
          href="https://www.linkedin.com/in/rouhkarimi/"
          className="social__network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </a>
      </div>
      <div className="logo">
        {" "}
        <ScrollLink
          to="header"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="r logo" width="50px" />
        </ScrollLink>
      </div>
    </div>
  );
}

export default Footer;
