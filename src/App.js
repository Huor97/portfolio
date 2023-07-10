import "./App.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projet from "./components/Projet";
import Experience from "./components/Experience";
import planSudeLogo from "../src/images/Logosolei.png";
import helloGolf from "../src/images/helloGolf-icon.jpg";

const experHelloGolf = [
  `
  J'ai effectué un stage de 3 mois chez Hello Golf en tant que développeur front-end. 
  J'ai réalisé des pages du site e-commerce permettant la visualisation des articles de golf. 
  J'ai utilisé ReactJS, Styled Components et une API REST. En tant que stagiaire, 
  j'ai également été challengé par mon tuteur avec des défis algorithmiques en JavaScript.
  `,
];
const experPlenSude = [
  `Avec un autre étudiant en informatique, je travaille sur une solution web/mobile de 
  dématérialisation de menus de restaurants, mon binôme connaissant ce secteur. 
  Nous concevons et réalisons ce projet à distance sur nos temps libres. En outre, 
  je gère nos tâches et apporte l'expertise technique. Enfin, les technologies choisies sont React, 
  SCSS et Supabase.`,
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
      <Projet />
      <Experience
        title="Experience"
        borderBottom={borrder}
        backgroundColor={backgroundPlanSude}
        logo={planSudeLogo}
        date={datePlenSud}
        titleEx={titlePlensud}
        subtitl={experPlenSude}
      />

      <Experience
        backgroundColor={backgroundHelloGolf}
        logo={helloGolf}
        date={dateHelloGolf}
        titleEx={titleHelloGolf}
        subtitl={experHelloGolf}
      />

      <Footer />
    </div>
  );
}

export default App;
