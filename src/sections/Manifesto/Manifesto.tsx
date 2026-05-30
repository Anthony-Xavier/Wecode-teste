import React from "react";
import "./Manifesto.scss";
import onda from "../../assets/Image-47.png";
import vinil from "../../assets/Image-31.png";
import skate from "../../assets/Image-28.png";
import estrela from "../../assets/Image-64.png";
import col1 from "../../assets/colecao1.png";
import col2 from "../../assets/colecao2.png";
import col3 from "../../assets/colecao3.png";
import col4 from "../../assets/colecao4.png";
import ondaVertical from "../../assets/Image-54.png";
import sorriso from "../../assets/Image-67.png";

const collectionsData = [
  { id: 1, imageSrc: col1, altText: "Camiseta Good Times", active: true },
  { id: 2, imageSrc: col2, altText: "Óculos de Sol", active: false },
  { id: 3, imageSrc: col3, altText: "Conjunto Jeans", active: false },
  { id: 4, imageSrc: col4, altText: "Mochila Rosa", active: false },
];

const Manifesto = () => {
  return (
    <>
      <section className="manifesto">
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
        <img
          src={ondaVertical}
          alt=""
          className="manifesto__onda manifesto__onda--vertical-left"
        />

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

      <section className="collections">
        <h2 className="collections__title">coleções.</h2>
        <div className="collections__grid">
          {collectionsData.map((item) => (
            <div
              key={item.id}
              className={`collections__card${item.active ? " collections__card--active" : ""}`}
            >
              <div className="collections__image-wrapper">
                <img src={item.imageSrc} alt={item.altText} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <img src={sorriso} alt="" className="collections__mascote" />
      </section>
    </>
  );
};

export default Manifesto;
