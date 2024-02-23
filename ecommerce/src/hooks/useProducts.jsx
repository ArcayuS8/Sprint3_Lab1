import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const fetchData = async (requestFn) => {
    setLoading(true);
    try {
      const response = await requestFn();
      return response.data;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const getProducts = async () => {
    const productsData = await fetchData(() => axios.get(API_URL));
    if (productsData) setProducts(productsData);
  };

  const getProductById = async (id) => {
    return await fetchData(() => axios.get(`${API_URL}/${id}`));
  };

  const updateProduct = async (id, editedProduct) => {
    const updatedProduct = await fetchData(() =>
      axios.put(`${API_URL}/${id}`, editedProduct)
    );
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = async (id) => {
    await fetchData(() => axios.delete(`${API_URL}/${id}`));
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const addProduct = async (newProduct) => {
    const addedProduct = await fetchData(() =>
      axios.post(API_URL, newProduct)
    );
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        getProducts,
        getProductById,
        updateProduct,
        deleteProduct,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
};