import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Manifesto from "./sections/Manifesto/Manifesto";
import VideoBanner from "./sections/VideoBanner/VideoBanner";
import Tenis from "./sections/Tenis/Tenis";
import CampanhaBanner from "./sections/CampanhaBanner/CampanhaBanner";
import Produtos from "./sections/Produtos/Produtos";
import Sobre from "./sections/Sobre/Sobre";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Manifesto />
      <VideoBanner />
      <Tenis />
      <CampanhaBanner />
      <Produtos />
      <Sobre />
    </div>
  );
}

export default App;
