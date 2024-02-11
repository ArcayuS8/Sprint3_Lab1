import PropTypes from 'prop-types';
import Banner from '../components/banner';
import LoginForm from './LoginForm';
import '../styles/CartSection.css';

function CartSection({ products, user, onLogin, onLogout }) {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.title]) {
      acc[product.title] = {
        ...product,
        quantity: 1,
      };
    } else {
      acc[product.title].quantity += 1;
    }
    return acc;
  }, {});

  return (
    <div className="cart-section">
      <Banner userName={user ? user.name : ''} />
      <h2>Resumen de la cesta</h2>
      {Object.values(groupedProducts).map((product, index) => (
        <div key={index} className="cart-item">
          <img
            src={product.image}
            alt={product.title}
            className="cart-product-image"
          />
          <div className="product-details">
            <p>{product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio por unidad: ${product.price.toFixed(2)}</p>
            <p>Precio total: ${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <p className="total-price">Total a Pagar: ${calculateTotalPrice(groupedProducts).toFixed(2)}</p>
      <LoginForm user={user} onLogin={onLogin} onLogout={onLogout} />
    </div>
  );
}

const calculateTotalPrice = (groupedProducts) => {
  let totalPrice = 0;
  Object.values(groupedProducts).forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
};

CartSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default CartSection;