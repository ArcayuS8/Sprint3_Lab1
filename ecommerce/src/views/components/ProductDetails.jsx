// Aqui muestro los detalels de cada producto, utilizando el id para encontrarlos

import products from "../../assets/data.json";
import { useParams } from "react-router";
import "../styles/ProductDetails.css";
import BackButton from "../../components/BackButton";
import AddToCart from "../../components/AddToCart";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <BackButton />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{`$${product.price}`}</p>
        <p className="product-description">{product.description}</p>
        <AddToCart item={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
