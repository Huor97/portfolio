import "./App.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projet from "./components/Projet";
import Experience from "./components/Experience";
import planSudeLogo from "../src/images/Logosolei.png";
import helloGolf from "../src/images/helloGolf-icon.jpg";
import dataVize from "./images/datavize.png";
import wonderFlower from "./images/wonderflower.png";
import neaveLeak from "./images/neaveleak.png";

const descriptionWonderFlower = {
  decription: `Site e-commerce de vente de fleurs : ce projet a été réalisé en équipe de 9 personnes. 👪 
    Tout d'abord, nous avons consacré 2 jours à la conception des choix d'architecture technique 
    et des fonctionnalités 👥 Cependant, la gestion de projet s'est faite en mode Agile/MVP, avec 
    une répartition des `,
  titleVercel: "😀 Le site est accessible sur ",
  linkVercel: "https://wonderflower.vercel.app/",
  erre: "(attention, il n'est pas encore compatible avec les appareils mobiles.) 💪",
  titleGit: "😉 Le code source est disponible sur ",
  gitHubLink:
    "https://github.com/adatechschool/projet_collectif_vente_de_fleurs-FRONTEND ",
};

const descriptionCatalogueFilm = {
  decription: `
  Site web de catalogue de films réalisé pour la visualisation de données d’un catalogue des films. 
  Cependant, la premier version en MVP/agile, nous avons utilisé Trello pour la gestion des tâches. 
  Après le développement était principalement axé sur le back-end avec une API basée sur celle de Netflix. 
  Et le front-end a été développé en JavaScript Vanilla. Ensuite, j'ai repris ce projet pour effectuer un 
  refactoring en utilisant React et API THEMOVIEDB.
  `,

  titleGit: "😉 Le code source est disponible sur ",
  gitHubLink: "https://github.com/Huor97/datavize",
};

const descriptionCycleMenstruel = {
  decription: `
  Application mobile de suivi du cycle menstruel : réalisée en mode Agile/MVP. Après une
  phase de conception de 2 jours, nous avons utilisé Miro pour répartir les tâches. Des
  groupes de 2 ou 3 personnes étaient responsables de différentes fonctionnalités. Du côté
  technique, le back-end utilisait Supabase basé sur PostgreSQL pour la gestion des accès et
  la génération de l'API. Le front-end a été développé en React Native.
  `,

  titleGit: "😉 Le code source est disponible sur ",
  gitHubLink: "https://github.com/adatechschool/NeverLeak_front",
};

const experHelloGolf = [
  `
  J'ai effectué un stage de 3 mois chez Hello Golf en tant que développeur front-end.
  Pendant cette période, ma principale responsabilité était de visualiser les données
  d'une API de leur site e-commerce du côté client en utilisant ReactJS et Styled Components
  pour le CSS. Parallèlement, mon tuteur me proposait des défis algorithmiques en JavaScript
  à relever.
  `,
];
const experPlenSude = [
  `
  J'ai décidé de créer, durant mon temps libre, un site web pour un restaurant à Toulouse, 
  en collaboration avec un ami qui y réside. Sur le plan technique, nous utilisons React et SCSS 
  pour le front-end, ainsi que la base de données Supabase pour le back-end.
  `,
];

const borrder = {
  borderBottom: "2px solid",
};
const backgroundHelloGolf = {
  backgroundColor: "rgb(47,73,123)",
  background:
    "linear-gradient(125deg, rgba(47,73,123,1) 0%, rgba(189,149,204,1) 100%)",
};

const backgroundPlanSude = {
  backgroundColor: "rgb(255,49,49)",
  background:
    "linear-gradient(90deg, rgba(255,49,49,1) 0%, rgba(255,145,77,1) 100%)",
};
const dateHelloGolf = "Janvier-Mars 2022";
const datePlenSud = "Depuis Juillet 2023";
const titleHelloGolf = "Développeur front end";
const titlePlensud = "Développeur full stack";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projet
        title="Projet e-commerce Vente de fleurs"
        subtitle={descriptionWonderFlower}
        vercel="Vercel"
        github="GitHub"
        projectImg={wonderFlower}
      />
      <Projet
        title="Catalogue de films"
        subtitle={descriptionCatalogueFilm}
        github="GitHub"
        projectImg={dataVize}
      />
      <Projet
        title="Mobile cycle menstruel"
        subtitle={descriptionCycleMenstruel}
        github="GitHub"
        projectImg={neaveLeak}
      />
      <Experience
        title="Experience"
        borderBottom={borrder}
        backgroundColor={backgroundHelloGolf}
        logo={helloGolf}
        date={dateHelloGolf}
        titleEx={titleHelloGolf}
        subtitl={experHelloGolf}
      />
      <Experience
        backgroundColor={backgroundPlanSude}
        logo={planSudeLogo}
        date={datePlenSud}
        titleEx={titlePlensud}
        subtitl={experPlenSude}
      />
      <Footer />
    </div>
  );
}

export default App;
