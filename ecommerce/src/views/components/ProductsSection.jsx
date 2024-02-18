// Aqui muestro la seccion que contiene todos los productos disponibles

import "../styles/ProductsSection.css";
import data from "../../assets/data.json";
import { useFiltro } from "../../context/FilterContext";
import ProductCard from "../../components/ProductCard";

function ProductsSection() {
  const { filtro } = useFiltro();

  const products = data.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="products-section">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsSection;
