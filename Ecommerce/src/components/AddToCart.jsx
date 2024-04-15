import PropTypes from 'prop-types';
import { useCart } from "../hooks/useCart.jsx";
import '../styles/AddToCart.css';

function AddToCart({ item }) {
  const { addToCart } = useCart();
  return (
    <button className="product-add-to-cart" onClick={() => addToCart(item)}>
      Añadir a la cesta
    </button>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  item: PropTypes.object.isRequired
};