import React from "react";
import "./Tenis.scss";
import fundoTenis from "../../assets/fundo-tenis.png";
import imgTenis from "../../assets/Image-21.png";
import carinha from "../../assets/Image-65.png";
import pes from "../../assets/Image-pes.png";

const Tenis = () => {
  return (
    <section className="tenis">
      <img src={fundoTenis} alt="" className="tenis__bg" />

      <div className="tenis__inner">
        <div className="tenis__header">
          <h2 className="tenis__title">tênis.</h2>
          <div>
            <img src={pes} alt="" />
          </div>
        </div>

        <div className="tenis__image-wrapper">
          <img src={imgTenis} alt="Tênis Loose" className="tenis__image" />
          <div className="tenis__quote">
            <p className="tenis__quote-text">"é o tênis que você usa</p>
            <p className="tenis__quote-tcc">
              pra
              <br />
              apresentação de
              <br />
              TCC."
            </p>
          </div>
        </div>

        <div className="tenis__footer">
          <h3 className="tenis__phrase">
            entre em contato com o que lhe faz bem.
          </h3>
          <p className="tenis__sub">
            Porque todos deveriam conhecer a sensação de ter aquele par
            perfeito.
          </p>
          <a href="#" className="tenis__cta">
            encontre seu tênis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tenis;
