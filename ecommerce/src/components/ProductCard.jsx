import PropTypes from 'prop-types';
import "../styles/ProductCard.css";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts.jsx";
import EditIcon from "../icons/EditIcon.svg";
import DeleteIcon from "../icons/DeleteIcon.svg";
import { Link } from "react-router-dom";
import ProductEditModal from "./ProductEditModal";
import AddToCart from "./AddToCart";

const ProductCard = ({ product, userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteProduct } = useProducts();
  const { id, title, price, image } = product;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card" key={id}>
      {userData?.role === "admin" && (
        <div className="admin-icons">
          <img src={EditIcon} alt="Edit" onClick={openModal} />
          <img src={DeleteIcon} alt="" onClick={() => deleteProduct(id)} />
        </div>
      )}
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{`$${price}`}</p>
        </div>
      </Link>
      {userData && <AddToCart item={product} />}
      {isModalOpen && (
        <ProductEditModal product={product} closeModal={closeModal} />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  userData: PropTypes.shape({
    role: PropTypes.string.isRequired
  })
};

export default ProductCard;
