import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/loose.png";
import carrinho from "../../assets/carrinho.png";
import coracao from "../../assets/coracao.png";
import { CiMenuBurger } from "react-icons/ci";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const navLinks = ["novidades.", "homem.", "mulher.", "tênis.", "acessórios."];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {navLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__search">
            <FiSearch size={16} />
            <input type="text" placeholder="Search" />
          </div>

          <button className="header__wishlist" aria-label="Wishlist">
            <img src={coracao} alt="Wishlist" />
          </button>

          <button className="header__cart" aria-label="Carrinho">
            <img src={carrinho} alt="Carrinho" />
          </button>

          {/* hamburger só aparece no mobile via CSS */}
          <button
            className="header__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <CiMenuBurger size={22} />
          </button>
        </div>
      </div>

      {/* menu mobile fullscreen */}
      {menuOpen && (
        <div className="header__mobile-menu">
          <div className="header__mobile-header">
            <button onClick={() => setMenuOpen(false)} aria-label="Fechar">
              <IoClose size={24} />
            </button>
          </div>

          <div className="header__mobile-search">
            <FiSearch size={18} />
            <input type="text" placeholder="Search" />
          </div>

          <nav className="header__mobile-nav">
            {navLinks.map((link) => (
              <a key={link} href="#">
                {link} <FiChevronRight size={18} />
              </a>
            ))}
          </nav>

          <div className="header__mobile-profile">
            <span>Perfil</span>
            <a href="#">Entrar</a>
            <a href="#">Junte-se a nós</a>
            <a href="#">Ajuda</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
