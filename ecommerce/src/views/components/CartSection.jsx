// Aqui muestro el contenido del carrito de compras
// Ademas incluyo lo botones de "comprar" o "resetear"

import "../styles/CartSection.css";
import { useCart } from "../../hooks/useCart.jsx";

const CartSection = () => {
  const { cartItems, resetCart } = useCart();

  const groupedCartItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, count: 1 };
    } else {
      acc[item.id].count++;
    }
    return acc;
  }, {});

  const uniqueCartItems = Object.values(groupedCartItems);

  const totalPrice = uniqueCartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const handleBuy = () => {
    const alertMessage = cartItems.length
      ? "Se redirigirá a la pasarela de pago"
      : "Debes añadir productos al carro";
    alert(alertMessage);
    resetCart();
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {uniqueCartItems.map(({ id, image, title, count, price }) => (
          <div key={id} className="cart-item">
            <div className="cart-item-image">
              <img src={image} alt={title} />
              <p className="item-count">{count}</p>
            </div>
            <div className="cart-item-details">
              <p>{title}</p>
              <p>Precio por unidad: ${price.toFixed(2)}</p>
              <p>Precio total: ${(price * count).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total a pagar: {totalPrice.toLocaleString("es-ES", { style: "currency", currency: "USD" })}</p>
      </div>
      <button className="buy-button" onClick={handleBuy}>
        Comprar
      </button>
      <button className="reset-button" onClick={() => resetCart()}>
        Eliminar productos
      </button>
    </div>
  );
};

export default CartSection;
