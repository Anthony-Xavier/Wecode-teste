import React from "react";
import "./Sobre.scss";
import skatePhoto from "../../assets/young-people-skateboarding-japan 1.png";
import mascote from "../../assets/Image-60.png";

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre__content">
        <h2 className="sobre__title">sobre a loose.</h2>
        <p className="sobre__desc">
          criada em 2026, a loose é uma marca feita para você que curte o
          streetwear, o skate, pra quem não quer passar despercebido. unimos o
          skate de fim de tarde, o show de quinta no centro e a primeira grana
          do freela em um lugar só, loose não é uma marca, é um estilo.
        </p>

        <div className="sobre__cards">
          {/* Card Missão com modificador de cor amarela */}
          <div className="sobre__card sobre__card--missao">
            <span className="sobre__card-label">MISSÃO</span>
            <h3 className="sobre__card-title">o que fazemos</h3>
            <div className="sobre__card-body">
              <p className="sobre__card-text">
                vestir o jovem urbano com peças que entregam atitude,{" "}
                <strong>qualidade e identidade.</strong>
              </p>
            </div>
          </div>

          {/* Card Visão com modificador de cor roxa */}
          <div className="sobre__card sobre__card--visao">
            <span className="sobre__card-label">VISÃO</span>
            <h3 className="sobre__card-title">onde queremos chegar</h3>
            <p className="sobre__card-text">
              ser, até 2030, a marca de streetwear premium mais{" "}
              <strong>relevante da américa latina.</strong>
            </p>
          </div>
        </div>

        <img src={mascote} alt="mascote loose" className="sobre__mascote" />
      </div>

      <div className="sobre__photo">
        <img src={skatePhoto} alt="jovem skatista" />
      </div>
    </section>
  );
};

export default Sobre;
