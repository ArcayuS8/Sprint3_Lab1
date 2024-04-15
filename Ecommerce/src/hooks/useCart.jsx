import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    savedCartItems && setCartItems(savedCartItems);
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

CartProvider.propTypes = {
  children: PropTypes.object.isRequired
};
