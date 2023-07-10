import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import datavizeMobilAcuil from "../images/datavize_mobil_acuil.jpg";
import datavizeMobilDescription from "../images/datavize_mobil_info.jpg";
import datavizePcAcuil from "../images/plus info netflix clone.png";
import ventDeFleur from "../images/vent-fleur1.png";
import basketVentFleur from "../images/baket-vent-fleur.png";
import neverleakAganda from "../images/neverleak_aganda.png";
import neverleakAcuille from "../images/neverleak_acuille.jpg";
import "./Projet.scss";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import ButtonGit from "./ButtonGit";
import DescriptionProjet from "./DescriptionProjet";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const projectDescription1 = [
  {
    title: "Présentation succincte :",
    skills: [
      `
    Un site (uniquement Web) réalisé en équipe sur 2 semaines qui permet à un utilisateur de mettre dans son panier des fleurs et des plantes visualisées avec plusieurs photographies.
    
    `,
      <ButtonGit lienGit="https://github.com/adatechschool/projet_collectif_vente_de_fleurs-FRONTEND" />,
    ],
  },
  {
    title: "Fonctionnalités :",
    skills: [
      "👩‍💻 Information détaillée sur les produits",
      "ℹ️ Authentification des utilisateurs",
      "🛒 Mise dans un panier pour achat ",
      "💽 Stockage des produits en base",
    ],
  },
  {
    title: "Cadre du projet et mes tâches : ",
    skills: [
      "⚡ Projet : Agile/MVP, 9 personnes",
      "⚡ Conception : architecture, besoins (2 j)",
      "⚡ Réalisation : Front (3 j) - Back (4 j)",
    ],
  },
  {
    title: "Socle technique : ",
    skills: [
      "🛠️ ReactJS-NodeJS-MongoDB",
      "🛠️ Intégration HTML - CSS(Tailwindecss)",
      "🛠️ JWT/token",
    ],
  },
];

const projectDescription2 = [
  {
    title: "Présentation succincte :",
    skills: [
      `
      Conçu et réalisé en équipe, ce site web et mobile permet la visualisation de données de films en interrogeant 
      une base en accès public. Par la suite, j’ai réalisé en individuel un refactoring de ce projet .

    `,
      <ButtonGit lienGit="https://github.com/Huor97/datavize" />,
    ],
  },
  {
    title: "Fonctionnalités :",
    skills: [
      "🔍 Recherche d’un film",
      "👩‍💻 Visualisation de sa fiche",
      "🔌 Connexion à l’API",
      "🔐 Authentification à l’API",
    ],
  },
  {
    title: "Cadre du projet et mes tâches : ",
    skills: [
      "⚡ Projet : Agile/MVP, Trello, 3 personnes",
      "⚡ Conception : architecture, besoins (2 j)",
      "⚡ Réalisation : Front et API (8 j) ",
      "⚡ Individuel : Refactoring (5 j)",
    ],
  },
  {
    title: "Socle technique : ",
    skills: [
      "🛠️ JS Vanilla - API Netflix",
      "🛠️ Intégration HTML - CSS",
      "pour le refactoring : ",
      "🛠️ JReact - API themoviedb - SCSS ",
    ],
  },
];
const projectDescription3 = [
  {
    title: "Présentation succincte :",
    skills: [
      `
      Cette application mobile aide au suivi du cycle menstruel en permettant de gérer un calendrier prévisionnel.
      Le projet était constitué en sous-groupes de 2/3 personnes, chacun étant responsable d’une fonctionnalité.

    `,
      <ButtonGit lienGit="https://github.com/adatechschool/NeverLeak_front" />,
    ],
  },
  {
    title: "Fonctionnalités :",
    skills: [
      "👩‍💻 Gestion de profil",
      "👩‍💻 Gestion de dates",
      "🔐 Authentification de l’utilisateur ",
      "🔌 Utilisation d’une API",
    ],
  },
  {
    title: "Cadre du projet et mes tâches : ",
    skills: [
      "⚡ Projet : Agile/MVP, Miro, 8 personnes",
      "⚡ Conception : architecture, besoins (2 j)",
      "⚡ Réalisation : Front - Back (9 j x 8 p)",
    ],
  },
  {
    title: "Socle technique : ",
    skills: ["🛠️ React Native", "🛠️ Supabase-API-PostgreSQL"],
  },
];

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
          <DescriptionProjet
            skillsTechs={projectDescription1}
            title="Projet e-commerce Vente de fleurs"
          />
        </div>
      </div>
      {/* =================================== image cadre1 */}
      <div className="projets__box" id="box">
        <div className="projets__container1">
          <div className="projets__tols">
            <h2>
              <b style={{ color: "#014f87" }} id="react__title">
                React +
              </b>
              <b style={{ color: "aqua" }} id="scss__title">
                Tailwindecss
              </b>
            </h2>
            <h2 style={{ textAlign: "center" }}>
              <b style={{ color: "#34c334" }} id="react__title">
                NodeJS,
              </b>
              <b style={{ color: "green" }} id="scss__title">
                MongoDB
              </b>
            </h2>
          </div>

          <div className="projets__images1">
            <div className="projets__imagepc1">
              <img src={ventDeFleur} alt="datavize" width="100%" />
            </div>
            <div className="projets__imagemobil1">
              <div className="imagemobil__container1">
                <img src={basketVentFleur} alt="datavize" />
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
          <DescriptionProjet
            skillsTechs={projectDescription2}
            title="Projet Dataviz Movies"
          />
        </div>
      </div>
      {/* ========================================== image cadre 2 */}
      <div className="projets__box" id="box1">
        <div className="projets__container">
          <div className="projets__tols">
            <h2>
              <b style={{ color: "#eeefef" }} id="react__title">
                {" "}
                React
              </b>{" "}
              <b style={{ color: "#eeefef" }} id="react__title">
                +
              </b>
              <b style={{ color: "#b313d3" }} id="scss__title">
                SCSS
              </b>
            </h2>
          </div>

          <div className="projets__images">
            <div className="projets__imagepc">
              <img src={datavizePcAcuil} alt="datavize" width="100%" />
            </div>
            <div className="projets__imagemobil">
              <div className="imagemobil__container">
                <img src={datavizeMobilAcuil} alt="datavize" />
              </div>
              <div className="imagemobil__container show--mobil">
                <img src={datavizeMobilDescription} alt="datavize" />
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
          <DescriptionProjet
            skillsTechs={projectDescription3}
            title="Projet cycle menstruel"
          />

          {/* <h2>Projet e-commerce Vente de fleurs</h2>
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
          </p> */}
        </div>
      </div>
      {/* ========================================= image cadre 3 */}
      <div className="projets__box" id="box2">
        <div className="projets__container3">
          <div className="projets__tols">
            <h2>
              <b style={{ color: "#e4fbff" }} id="react__title">
                React Native
              </b>
              <b style={{ color: "#e4fbff" }} id="react__title">
                +
              </b>
              <b style={{ color: "#c6ebc8" }} id="scss__title">
                Supabase
              </b>
            </h2>
          </div>

          <div className="projets__images3">
            <div className="projets__imagepc3">
              <img src={neverleakAcuille} alt="datavize" />
            </div>
            <div className="projets__imagemobil3">
              <div className="imagemobil__container3">
                <img src={neverleakAganda} alt="datavize" />
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
