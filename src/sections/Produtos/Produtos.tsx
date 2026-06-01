import React, { useRef, useState } from "react";
import "./Produtos.scss";
import { useCart } from "../../context/CartContext";
import { PRODUTOS_MOCK, type Produto } from "../../data/products";
import { imagensPorId } from "../../data/productImages";
import fundo from "../../assets/fundo-produtos.png";
import imgSolto from "../../assets/Image-27.png";
import carinha from "../../assets/Image-66.png";
import imgEmail from "../../assets/Image-35.png";
import mascote from "../../assets/Image-45.png";

const formatPreco = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const ProdutoCard = ({ p, fotos }: { p: Produto; fotos: string[] }) => {
  const { addItem } = useCart();
  const [idx, setIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + fotos.length) % fotos.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % fotos.length);
  };

  return (
    <div className="produtos__card">
      <div className="produtos__image-wrapper">
        <img src={fotos[idx]} alt={p.modelo} draggable="false" />

        {fotos.length > 1 && (
          <>
            <button
              className="produtos__carousel-btn produtos__carousel-btn--prev"
              onClick={prev}
            >
              ‹
            </button>
            <button
              className="produtos__carousel-btn produtos__carousel-btn--next"
              onClick={next}
            >
              ›
            </button>
            <div className="produtos__image-dots">
              {fotos.map((_, i) => (
                <span
                  key={i}
                  className={`produtos__dot${i === idx ? " produtos__dot--active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIdx(i);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="produtos__info">
        <span className="produtos__tag">apenas em</span>
        <h3 className="produtos__name">{p.modelo.toLowerCase()}.</h3>
        <p className="produtos__category">
          ref: {p.ref} · {p.cores}
        </p>
        <p className="produtos__cores">{p.tamanho.join(", ")}</p>
        <div className="produtos__footer">
          <div className="produtos__preco">
            {p.precoPromocional ? (
              <>
                <span className="produtos__price--original">
                  {formatPreco(p.precoOriginal)}
                </span>
                <span className="produtos__price">
                  {formatPreco(p.precoPromocional)}
                </span>
              </>
            ) : (
              <span className="produtos__price">
                {formatPreco(p.precoOriginal)}
              </span>
            )}
          </div>
          <button
            className="produtos__btn"
            onClick={() =>
              addItem({
                id: p.id,
                name: p.modelo,
                price: p.precoPromocional ?? p.precoOriginal,
                image: fotos[0],
              })
            }
          >
            comprar
          </button>
        </div>
      </div>
    </div>
  );
};

const Produtos = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".produtos__image-wrapper")) return;
    if (!gridRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - gridRef.current.offsetLeft);
    setScrollLeft(gridRef.current.scrollLeft);
  };
  const handleMouseLeaveOrUp = () => setIsDown(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !gridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    gridRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  return (
    <section className="produtos">
      <img src={fundo} alt="" className="produtos__bg" />

      <div className="produtos__main-container">
        <div
          className={`produtos__grid${isDown ? " produtos__grid--dragging" : ""}`}
          ref={gridRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {PRODUTOS_MOCK.map((p) => (
            <ProdutoCard key={p.id} p={p} fotos={imagensPorId[p.id] ?? []} />
          ))}
        </div>

        {/* Bloco Solto */}
        <div className="produtos__solto-container">
          <h2 className="produtos__titulo-solto">
            So
            <br />
            lto.
          </h2>
          <img
            src={imgSolto}
            alt="Modelos Solto"
            className="produtos__img-solto"
          />
          <img src={mascote} alt="Mascote" className="produtos__mascote" />
          <img
            src={carinha}
            alt="Sticker Smile"
            className="produtos__carinha"
          />
        </div>

        {/* Newsletter */}
        <div className="produtos__email-container">
          <img src={imgEmail} alt="" className="produtos__email-bg" />

          <div className="produtos__email-content">
            <p className="produtos__email-text">
              Cadastre-se para ficar por dentro
              <br />
              das novidades do mundo streetwear.
            </p>

            {/* SE JÁ FOI ENVIADO: Mostra mensagem de sucesso */}
            {isSubmitted ? (
              <div className="produtos__email-success">
                <span>SUCESSO.</span>EMAIL ENVIADO
              </div>
            ) : (
              /* SE NÃO FOI ENVIADO: Mostra o formulário padrão */
              <form
                className="produtos__email-form"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="SEU EMAIL"
                  className="produtos__email-input"
                  required
                />
                <button type="submit" className="produtos__email-btn">
                  enviar.
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
