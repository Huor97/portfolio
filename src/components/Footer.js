import React from "react";
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

function Footer() {
  library.add(faTwitter, faGithubAlt, faStackOverflow, faLinkedinIn);
  return (
    <div className="container">
      <Contact />
      {/* réseux socials */}
      <div className="social__networks">
        <a href="/" className="social__network">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a href="/" className="social__network">
          <FontAwesomeIcon icon="fa-brands fa-github-alt" />
        </a>
        <a href="/" className="social__network">
          <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
        </a>
        <a href="/" className="social__network">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </a>
      </div>
      <div className="logo">logo</div>
    </div>
  );
}

export default Footer;
