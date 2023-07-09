import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import datavizeMobilAcuil from "../images/datavize_mobil_acuil.jpg";
import datavizePcAcuil from "../images/plus info netflix clone.png";
import "./Projet.scss";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import ButtonGit from "./ButtonGit";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Projet() {
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

  const slideInTopLine = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  // ============== projet 1
  useEffect(() => {
    slideInTop("#title-box");
  }, []);
  useEffect(() => {
    slideInTopLine("#line-box");
  }, []);
  useEffect(() => {
    slideInLeft("#box");
  }, []);

  useEffect(() => {
    slideInTopLine("#lineEnd");
  }, []);

  // =========== projet 2
  useEffect(() => {
    slideInTop("#title-box1");
  }, []);
  useEffect(() => {
    slideInTopLine("#line-box1");
  }, []);
  useEffect(() => {
    slideInLeft("#box1");
  }, []);

  useEffect(() => {
    slideInTopLine("#lineEnd1");
  }, []);
  // =========== projet 3
  useEffect(() => {
    slideInTop("#title-box2");
  }, []);
  useEffect(() => {
    slideInTopLine("#line-box2");
  }, []);
  useEffect(() => {
    slideInLeft("#box2");
  }, []);

  useEffect(() => {
    slideInTopLine("#lineEnd2");
  }, []);
  return (
    <section className="projets" id="projet">
      {/* ========================== projet 1 */}
      <div className="projets__titles">
        <div className="projets__lines" id="line-box">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>

        <div className="projets__title" id="title-box">
          <h2>Projet e-commerce Vente de fleurs</h2>

          {/* fontion du site */}
          <div className="projets__lists">
            <div className="projets__presentations">
              <div className="projset__presentation">
                <h3>totoototototooto</h3>
                <ul>
                  <li>ce projet a été réalisé en équipe de 9 personnes.</li>
                  <li>Tout d'abord, nous avons consacré 2 jours</li>
                  <li>
                    à la conception des choix
                    <a
                      href="https://wonderflower.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      vercel
                    </a>
                  </li>

                  <li>
                    attention, il n'est pas encore compatible avec les appareils
                    mobiles.
                  </li>
                  <li>
                    <ButtonGit />
                  </li>
                </ul>
              </div>
              <div className="projets__pres">
                <h3>Présentation d’une vitrine de produits (fleurs)</h3>
                <ul className="projets__presentaion">
                  <li>ℹ️ Information détaillée sur les produits</li>
                  <li>👩‍💻 Création de compte utilisateur et authentification</li>
                  <li>🛒 Mise dans un panier pour achat </li>
                  <li>💽 Stockage des produits en base</li>
                </ul>
              </div>
            </div>
            <div className="projets__cadres">
              <div className="projets__tachs">
                <h3>Cadre du projet et mes tâches : </h3>
                <ul className="projets__tach">
                  <li>
                    ⚡ Projet : méthode Agile/MVP, 9 personnes (5 front, 4 back)
                  </li>
                  <li>
                    ⚡ Conception : 2 jours, architecture, fonctionnalités
                  </li>
                  <li>
                    ⚡ Réalisation : 3 jours sur le front, 4 jours sur le back
                  </li>
                </ul>
              </div>
              <div className="projets__techs">
                <h3>Le socle technique : </h3>
                <ul className="projets__tech">
                  <li>🛠️ Développement sous ReactJS-NodeJS-MongoDB</li>
                  <li>🛠️ Intégration HTML - CSS(Tailwindecss)</li>
                  <li>🛠️ JWT/token </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projets__box" id="box">
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
        <div className="lines" id="lineEnd">
          <div className="line"></div>
        </div>
      </div>
      {/* ========================== projet 2 */}
      <div className="projets__titles">
        <div className="projets__lines" id="line-box1">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>

        <div className="projets__title" id="title-box1">
          <h2>Projet e-commerce Vente de fleurs</h2>
          <p className="projets__paragraphe">
            Site e-commerce de vente de fleurs : ce projet a été réalisé en
            équipe de 9 personnes. 👪 Tout d'abord, nous avons consacré 2 jours
            à la conception des choix d'architecture technique et des
            fonctionnalités 👥 Cependant, la gestion de projet s'est faite en
            mode Agile/MVP, avec une répartition des
            <a
              href="https://wonderflower.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel
            </a>
            <span>
              attention, il n'est pas encore compatible avec les appareils
              mobiles 💪
            </span>
            <a
              href="https://github.com/adatechschool/projet_collectif_vente_de_fleurs-FRONTEND"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </p>
        </div>
      </div>

      <div className="projets__box" id="box1">
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
        <div className="lines" id="lineEnd1">
          <div className="line"></div>
        </div>
      </div>
      {/* ========================== projet 3 */}
      <div className="projets__titles">
        <div className="projets__lines" id="line-box2">
          <div className="projets__icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="projets__line"></div>
        </div>

        <div className="projets__title" id="title-box2">
          <h2>Projet e-commerce Vente de fleurs</h2>
          <p>
            Site e-commerce de vente de fleurs : ce projet a été réalisé en
            équipe de 9 personnes. 👪 Tout d'abord, nous avons consacré 2 jours
            à la conception des choix d'architecture technique et des
            fonctionnalités 👥 Cependant, la gestion de projet s'est faite en
            mode Agile/MVP, avec une répartition des
            <a
              href="https://wonderflower.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel
            </a>
            <span>
              attention, il n'est pas encore compatible avec les appareils
              mobiles 💪
            </span>
            <a
              href="https://github.com/adatechschool/projet_collectif_vente_de_fleurs-FRONTEND"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </p>
        </div>
      </div>

      <div className="projets__box" id="box2">
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
        <div className="lines" id="lineEnd2">
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Projet;
