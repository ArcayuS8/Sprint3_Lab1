import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useContext, useCallback } from "react";
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

  const fetchData = useCallback(async (requestFn) => {
    setLoading(true);
    try {
      const response = await requestFn();
      return response.data;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProducts = useCallback(async () => {
    const productsData = await fetchData(() => axios.get(API_URL));
    if (productsData) setProducts(productsData);
  }, [fetchData]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const getProductById = useCallback(async (id) => {
    return await fetchData(() => axios.get(`${API_URL}/${id}`));
  }, [fetchData]);

  const updateProduct = useCallback(async (id, editedProduct) => {
    const updatedProduct = await fetchData(() =>
      axios.put(`${API_URL}/${id}`, editedProduct)
    );
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? updatedProduct : product
      )
    );
  }, [fetchData, setProducts]);

  const deleteProduct = useCallback(async (id) => {
    await fetchData(() => axios.delete(`${API_URL}/${id}`));
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, [fetchData, setProducts]);

  const addContextProduct = useCallback(async (newProduct) => {
    const addedProduct = await fetchData(() =>
      axios.post(API_URL, newProduct)
    );
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  }, [fetchData, setProducts]);

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
        addContextProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
