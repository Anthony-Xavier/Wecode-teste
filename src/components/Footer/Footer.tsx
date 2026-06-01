import React from "react";
import mascote from "../../assets/Image-48.png";
import facebook from "../../assets/redes/face.png";
import instagram from "../../assets/redes/insta.png";
import twitter from "../../assets/redes/tt.png";
import youtube from "../../assets/redes/yt.png";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li>
              <a href="#">sobre a loose.</a>
            </li>
            <li>
              <a href="#">notícias.</a>
            </li>
            <li>
              <a href="#">carreira.</a>
            </li>
            <li>
              <a href="#">sustentabilidade.</a>
            </li>
          </ul>
          <ul className="footer__nav-list">
            <li>
              <a href="#">status do pedido.</a>
            </li>
            <li>
              <a href="#">entrega.</a>
            </li>
            <li>
              <a href="#">opções de pagamento.</a>
            </li>
          </ul>
        </div>

        <div className="footer__mascote">
          <img src={mascote} alt="mascote loose" />
        </div>

        <div className="footer__brand">
          <h2 className="footer__brand-title">
            marca brasileira de streetwear premium.
          </h2>
          <p className="footer__brand-desc">
            peças que duram mais que uma estação — e fazem você parecer mais
            interessante do que parecia 5 minutos antes.
          </p>
        </div>

        <div className="footer__social">
          <a href="#" aria-label="Twitter">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 loose.inc. todos direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
