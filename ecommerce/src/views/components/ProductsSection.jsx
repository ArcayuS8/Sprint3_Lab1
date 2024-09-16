// Aqui muestro la seccion que contiene todos los productos disponibles

import { useState } from "react";
import "../styles/ProductsSection.css";
import { useFiltro } from "../../context/FilterContext";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../hooks/useProducts.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import AddProductModal from "../../components/AddProductModal.jsx";
import Loader from "../../components/Loader.jsx";
import ErrorComponent from "../../components/ErrorComponent.jsx";

function ProductsSection() {
  const { filtro } = useFiltro();
  const { products, loading, error, addProduct } = useProducts();
  const { userData } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAdmin = userData?.role === "admin";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleAddProduct = () => {
    openModal();
  };

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
