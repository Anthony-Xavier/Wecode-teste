import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Manifesto from "./sections/Manifesto/Manifesto";
import VideoBanner from "./sections/VideoBanner/VideoBanner";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Manifesto />
      <VideoBanner />
    </div>
  );
}

export default App;
