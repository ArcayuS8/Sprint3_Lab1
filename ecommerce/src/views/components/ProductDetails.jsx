// Aqui muestro los detalels de cada producto, utilizando el id para encontrarlos

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../hooks/useProducts.jsx";
import AddToCart from "../../components/AddToCart";
import BackButton from "../../components/BackButton";
import ErrorComponent from "../../components/ErrorComponent.jsx";
import Loader from "../../components/Loader.jsx";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { getProductById, loading, error } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchData();
  }, [id]);

  if (loading) {
    <Loader />;
  }

  if (!product && !error) {
    return <>No hay productos</>;
  }

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
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
      )}
    </>
  );
};

export default ProductDetails;
