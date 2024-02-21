import PropTypes from 'prop-types';
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;
  const { isLoggedIn } = useAuth();

  return (
    <div className="product-card" key={id}>
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{`$${price}`}</p>
        </div>
      </Link>
      {isLoggedIn && <AddToCart item={product} />}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default ProductCard;
