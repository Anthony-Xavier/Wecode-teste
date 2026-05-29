import React from "react";
import "./Header.scss";
import logo from "../../assets/loose.png";
import lupa from "../../assets/lupa.png";
import coracao from "../../assets/coracao.png";
import carrinho from "../../assets/carrinho.png";

const navLinks = ["novidades.", "homem.", "mulher.", "tênis.", "acessórios."];

const Header = () => {
  return (
    <header className="header">
      <div className="header__topbar">
        <span>Ajuda</span>
        <span>Junte-se a nós</span>
        <span>entrar</span>
      </div>

      <div className="header__main">
        <img src={logo} alt="Loose Logo" className="header__logo" />

        <nav className="header__nav">
          {navLinks.map((link, i) => (
            <a key={i} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__search">
            <img src={lupa} alt="Search" />
            <input type="text" placeholder="Search" />
          </div>

          <button className="header__wishlist" aria-label="Wishlist">
            <img src={coracao} alt="Wishlist" />
          </button>

          <button className="header__cart" aria-label="Carrinho">
            <img src={carrinho} alt="Carrinho" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
