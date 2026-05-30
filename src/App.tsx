import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Manifesto from "./sections/Manifesto/Manifesto";
import VideoBanner from "./sections/VideoBanner/VideoBanner";
import Tenis from "./sections/Tenis/Tenis";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Manifesto />
      <VideoBanner />
      <Tenis />
    </div>
  );
}

export default App;
