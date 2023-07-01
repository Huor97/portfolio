import "./App.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projet from "./components/Projet";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      {/* main*/}
      <Projet title="toto" subtitle="helo" projectImg="img" />

      <Projet title="toto" subtitle="helo" projectImg="img" />

      <Projet title="toto" subtitle="helo" projectImg="img" />

      {/* footer*/}
      <Footer />
    </div>
  );
}

export default App;
