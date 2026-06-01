import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { PRODUTOS_MOCK, type Categoria as CategoriaSlug, type Produto } from "../../data/products";
import { imagensPorId } from "../../data/productImages";
import { useCart } from "../../context/CartContext";
import "./Categoria.scss";

const formatPreco = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const LABELS: Record<CategoriaSlug, string> = {
  novidades: "novidades.",
  homem: "homem.",
  mulher: "mulher.",
  tenis: "tênis.",
  acessorios: "acessórios.",
};

// ── Card de produto ─────────────────────────────────────────────────────────
const ProdutoCard = ({ p, fotos }: { p: Produto; fotos: string[] }) => {
  const { addItem } = useCart();
  const [idx, setIdx] = useState(0);

  return (
    <div className="cat-card">
      <div className="cat-card__images">
        <img src={fotos[idx]} alt={p.modelo} draggable="false" />

        {fotos.length > 1 && (
          <>
            <button
              className="cat-card__nav cat-card__nav--prev"
              onClick={() => setIdx((i) => (i - 1 + fotos.length) % fotos.length)}
            >‹</button>
            <button
              className="cat-card__nav cat-card__nav--next"
              onClick={() => setIdx((i) => (i + 1) % fotos.length)}
            >›</button>
            <div className="cat-card__dots">
              {fotos.map((_, i) => (
                <span
                  key={i}
                  className={`cat-card__dot${i === idx ? " cat-card__dot--active" : ""}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </>
        )}

        {p.precoPromocional && (
          <span className="cat-card__badge">SALE</span>
        )}
      </div>

      <div className="cat-card__info">
        <h3 className="cat-card__name">{p.modelo.toLowerCase()}.</h3>
        <p className="cat-card__meta">{p.cores} · {p.tamanho.join(", ")}</p>

        <div className="cat-card__footer">
          <div className="cat-card__preco">
            {p.precoPromocional ? (
              <>
                <span className="cat-card__preco--original">{formatPreco(p.precoOriginal)}</span>
                <span className="cat-card__preco--atual">{formatPreco(p.precoPromocional)}</span>
              </>
            ) : (
              <span className="cat-card__preco--atual">{formatPreco(p.precoOriginal)}</span>
            )}
          </div>
          <button
            className="cat-card__btn"
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

// ── Página ───────────────────────────────────────────────────────────────────
const Categoria = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cat = pathname.replace("/", "") as CategoriaSlug;

  const label = LABELS[cat] ?? `${cat}.`;
  const produtos = PRODUTOS_MOCK.filter((p) => p.categorias.includes(cat));

  return (
    <main className="categoria">
      <div className="categoria__hero">
        <button className="categoria__back" onClick={() => navigate(-1)}>
          <FiChevronLeft size={18} /> voltar
        </button>
        <h1 className="categoria__title">{label}</h1>
        <p className="categoria__count">{produtos.length} produto{produtos.length !== 1 ? "s" : ""}</p>
      </div>

      {produtos.length === 0 ? (
        <div className="categoria__empty">
          <p>nenhum produto encontrado nessa categoria.</p>
        </div>
      ) : (
        <div className="categoria__grid">
          {produtos.map((p) => (
            <ProdutoCard key={p.id} p={p} fotos={imagensPorId[p.id] ?? []} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Categoria;
