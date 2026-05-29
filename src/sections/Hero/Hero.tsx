import React from "react";
import "./Hero.scss";
import heroBg from "../../assets/hero.png";
import sol from "../../assets/Image-64.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroBg} alt="Hero background" className="hero__bg" />
      <img src={sol} alt="" className="hero__sol" />
      {/* Bloco superior: título */}
      <div className="hero__content-top">
        <span className="hero__drop-tag">DROP 04</span>
        <h1 className="hero__title">
          pôr-do-sol
          <span className="hero__title--purple"> no centro.</span>
        </h1>
        <p className="hero__quote">"a coleção que veste a hora de ouro"</p>
        <svg
          width="150"
          height="3"
          viewBox="0 0 150 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path d="M0 1.5H149.299" stroke="#FFD60A" strokeWidth="3" />
        </svg>
      </div>

      {/* Bloco inferior: produto */}
      <div className="hero__content-bottom">
        <h3 className="hero__subtitle">12 peças. tudo limitado.</h3>
        <p className="hero__description">
          friozinho de junho. desenhada com referências do skate cores quentes,
          tecidos pesados, peças que aguentam o paulistano e da estação da luz
          num sábado de tarde.
        </p>
        <a href="#" className="hero__cta">
          quero.
        </a>
      </div>

      <div className="hero__footer">
        <span className="hero__footer-left">
          moda séria
          <br />é chata.
        </span>
        <span className="hero__footer-center">chegou drop novo. corre.</span>
        <span className="hero__footer-right">
          disponível a partir de quinta · 18h
        </span>
      </div>
    </section>
  );
};

export default Hero;
