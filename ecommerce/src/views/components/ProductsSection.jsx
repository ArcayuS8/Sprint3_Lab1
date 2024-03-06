import { useEffect, useState } from "react";
import "../styles/ProductsSection.css";
import { useFiltro } from "../../context/FilterContext.jsx";
import ProductCard from "../../components/ProductCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectLoading, selectError } from "../../store/slices/productsSlice.js";
import { getProductsThunk, addProductThunk } from "../../store/thunks/productsThunks";
import {useAuth} from "../../hooks/useAuth.jsx";
import AddProductModal from "../../components/AddProductModal";
import Loader from "../../components/Loader";
import ErrorComponent from "../../components/ErrorComponent";

function ProductsSection() {
  const { filtro } = useFiltro();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { userData } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAdmin = userData?.role === "admin";

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleAddProduct = () => {
    openModal();
  };

  const addProduct = (newProduct) => {
    dispatch(addProductThunk(newProduct));
  };

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ErrorComponent error={error} />

      {isModalOpen && (
        <AddProductModal closeModal={closeModal} addProduct={addProduct} />
      )}

      <div className="products-section">
        {filteredProducts.length
          ? filteredProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${product.updatedAt}`}
                product={product}
                userData={userData}
              />
            ))
          : !error && <p>Ningún producto coincide con tu búsqueda</p>}
      </div>

      {isAdmin && (
        <div className="add-product-btn-container">
          <button className="add-product-btn" onClick={handleAddProduct}>
          Añadir productos
          </button>
        </div>
      )}
    </>
  );
}

export default ProductsSection;