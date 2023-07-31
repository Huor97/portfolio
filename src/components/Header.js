import React, { useEffect } from "react";
import "./Header.scss";
import Resume from "../images/karimi_cv_developper full stack_2023-2024.pdf";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Header() {
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideInleft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#line1");
  }, []);

  useEffect(() => {
    slideInTop("#line2");
  }, []);

  useEffect(() => {
    slideInleft("#border");
  }, []);

  useEffect(() => {
    slideInleft("#line-cv");
  }, []);

  return (
    <header className="banner" id="header">
      <div className="banner__presention">
        <div className="vertical" id="line1">
          <div className="vertical__line"></div>
        </div>

        <div className="banner__titles">
          <h1 className="banner__title" id="border">
            Rouhullah karimi
          </h1>
          <p>Software Developer</p>
          <p className="banner__formation">en formation chez</p>
          <p className="banner__subtitle">Ada Tech School</p>
        </div>
      </div>

      <div className="banner__cv">
        <div className="vertical" id="line2">
          <div className="vertical__icon">
            <p>CV</p>
          </div>
          <div className="vertical__line"></div>
        </div>

        <div className="vertical__cv" id="line-cv">
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
