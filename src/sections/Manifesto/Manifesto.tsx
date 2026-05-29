import React from "react";
import "./Manifesto.scss";
import onda from "../../assets/Image-47.png";
import vinil from "../../assets/Image-31.png";
import skate from "../../assets/Image-28.png";
import estrela from "../../assets/Image-64.png";

const Manifesto = () => {
  return (
    <section className="manifesto">
      {/* Decorações laterais */}
      <img
        src={onda}
        alt=""
        className="manifesto__onda manifesto__onda--left"
      />
      <img
        src={onda}
        alt=""
        className="manifesto__onda manifesto__onda--right"
      />

      {/* Mascotes */}
      <img
        src={vinil}
        alt=""
        className="manifesto__mascote manifesto__mascote--left"
      />
      <img
        src={skate}
        alt=""
        className="manifesto__mascote manifesto__mascote--right"
      />

      {/* Conteúdo central */}
      <div className="manifesto__content">
        <div className="manifesto__heading">
          <img src={estrela} alt="" className="manifesto__estrela" />
          <h2 className="manifesto__title">a gente não é roupa.</h2>
        </div>

        <p className="manifesto__sub">
          a gente é a desculpa
          <br />
          que você precisa pra sair de casa.
        </p>

        <hr className="manifesto__divider" />

        <p className="manifesto__body">
          porque rua não é cenário, é território.
          <br />
          porque domingo de manhã também é hora de ser visto.
          <br />
          porque ninguém precisa pedir licença pra ocupar espaço.
        </p>

        <hr className="manifesto__divider" />

        <h3 className="manifesto__phrase">
          a Loose não veste quem quer passar despercebido.
        </h3>

        <hr className="manifesto__divider" />

        <p className="manifesto__cta-text">
          a Loose veste quem chegou
          <img src={estrela} alt="" className="manifesto__estrela-inline" />
        </p>

        <a href="#" className="manifesto__cta">
          wear it loose. live it loud.
        </a>
      </div>
    </section>
  );
};

export default Manifesto;
