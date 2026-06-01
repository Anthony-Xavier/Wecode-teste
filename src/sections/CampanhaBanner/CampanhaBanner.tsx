import React from "react";
import "./CampanhaBanner.scss";
import mascoteCima from "../../assets/Image-43.png";
import mascoteBaixo from "../../assets/Image-42.png";
import mascoteLateral from "../../assets/Image-58.png";
import background from "../../assets/Image-22.png";
import pes from "../../assets/Image-pes.png";

const CampanhaBanner = () => {
  return (
    <section className="campanha">
      {/* LADO ESQUERDO — amarelo */}

      <div className="campanha__left">
        <img src={pes} alt="" className="campanha__pes campanha__pes--left" />
        <div className="campanha__text">
          <img
            src={mascoteCima}
            alt="Mascote Skatista Cima"
            className="campanha__mascote campanha__mascote--top"
          />
          <hr className="campanha__divider campanha__divider--top" />

          <h2>
            a roupa
            <br />
            veste você.
            <br />
            <span>
              não o<br />
              contário.
            </span>
          </h2>

          <hr className="campanha__divider campanha__divider--bottom" />
          <a href="#" className="campanha__cta">
            saber mais.
          </a>
          <img
            src={mascoteBaixo}
            alt="Mascote Skatista Baixo"
            className="campanha__mascote campanha__mascote--bottom"
          />
        </div>
      </div>

      {/* LADO DIREITO — claro com foto */}
      <div className="campanha__right">
        <img src={pes} alt="" className="campanha__pes campanha__pes--right" />
        <img src={background} alt="Modelo Loose" className="campanha__modelo" />
        <div className="campanha__tagline">
          <p>
            wear it loose.
            <br />
            live it loud.
          </p>
        </div>

        <img
          src={mascoteLateral}
          alt=""
          className="campanha__mascote campanha__mascote--purple"
        />
      </div>
    </section>
  );
};

export default CampanhaBanner;
