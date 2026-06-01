import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/loose.png";
import carrinho from "../../assets/carrinho.png";
import coracao from "../../assets/coracao.png";
import { CiMenuBurger } from "react-icons/ci";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "novidades.", path: "/novidades" },
  { label: "homem.", path: "/homem" },
  { label: "mulher.", path: "/mulher" },
  { label: "tênis.", path: "/tenis" },
  { label: "acessórios.", path: "/acessorios" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__topbar">
        <span>Ajuda</span>
        <span>Junte-se a nós</span>
        <span>entrar</span>
      </div>

      <div className="header__main">
        <img
          src={logo}
          alt="Loose Logo"
          className="header__logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <nav className="header__nav">
          {navLinks.map(({ label, path }) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? "header__nav-link--active" : undefined}>
              {label}
            </NavLink>
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

          <button
            className="header__cart"
            aria-label="Carrinho"
            onClick={() => setIsOpen(true)}
          >
            <img src={carrinho} alt="Carrinho" />
            {totalItems > 0 && (
              <span className="header__cart-badge">{totalItems}</span>
            )}
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
            {navLinks.map(({ label, path }) => (
              <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}>
                {label} <FiChevronRight size={18} />
              </NavLink>
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
