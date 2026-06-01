import React from "react";
import Hero from "../../sections/Hero/Hero";
import Manifesto from "../../sections/Manifesto/Manifesto";
import VideoBanner from "../../sections/VideoBanner/VideoBanner";
import Tenis from "../../sections/Tenis/Tenis";
import CampanhaBanner from "../../sections/CampanhaBanner/CampanhaBanner";
import Produtos from "../../sections/Produtos/Produtos";
import Sobre from "../../sections/Sobre/Sobre";
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <>
    <Hero />
    <Manifesto />
    <VideoBanner />
    <Tenis />
    <CampanhaBanner />
    <Produtos />
    <Sobre />
    <Footer />
  </>
);

export default Home;
