// Aqui muestro los detalels de cada producto, utilizando el id para encontrarlos

import { useEffect } from "react";
import { useParams } from "react-router";
import AddToCart from "../../components/AddToCart";
import BackButton from "../../components/BackButton";
import ErrorComponent from "../../components/ErrorComponent.jsx";
import Loader from "../../components/Loader.jsx";
import "../styles/ProductDetails.css";
import { resetSelectedProduct, selectError, selectLoading, selectSelectedProduct } from "../../store/slices/productsSlice.js";
import { useDispatch, useSelector} from "react-redux";
import { fetchProductById  } from "../../store/thunks/productsThunks.js";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById (id));

    return () => {
      dispatch(resetSelectedProduct());
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!selectedProduct && !error) {
    return <>No hay productos</>;
  }

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <div className="product-details-container">
          <div className="product-image">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <BackButton />
          </div>
          <div className="product-details">
            <h2 className="product-title">{selectedProduct.title}</h2>
            <p className="product-price">{`$${selectedProduct.price}`}</p>
            <p className="product-description">{selectedProduct.description}</p>
            <AddToCart item={selectedProduct} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
