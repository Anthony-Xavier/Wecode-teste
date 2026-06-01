import { IoClose } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import "./MiniCart.scss";

const formatPreco = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const MiniCart = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, totalItems } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="minicart__overlay" onClick={() => setIsOpen(false)} />

      <aside className="minicart">
        <div className="minicart__header">
          <h2 className="minicart__title">
            carrinho.{" "}
            <span className="minicart__count">({totalItems})</span>
          </h2>
          <button
            className="minicart__close"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar carrinho"
          >
            <IoClose size={22} />
          </button>
        </div>

        <div className="minicart__body">
          {items.length === 0 ? (
            <div className="minicart__empty">
              <p>seu carrinho está vazio.</p>
            </div>
          ) : (
            <ul className="minicart__list">
              {items.map((item) => (
                <li key={item.id} className="minicart__item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="minicart__item-img"
                  />
                  <div className="minicart__item-info">
                    <p className="minicart__item-name">
                      {item.name.toLowerCase()}.
                    </p>
                    <p className="minicart__item-price">
                      {formatPreco(item.price)}
                    </p>
                    <div className="minicart__item-qty">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="minicart__item-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remover item"
                  >
                    <IoClose size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="minicart__footer">
            <div className="minicart__total">
              <span>total</span>
              <span>{formatPreco(totalPrice)}</span>
            </div>
            <button className="minicart__checkout">finalizar compra.</button>
            <button
              className="minicart__continue"
              onClick={() => setIsOpen(false)}
            >
              continuar comprando.
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default MiniCart;
