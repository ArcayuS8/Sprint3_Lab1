import PropTypes from 'prop-types';
import { useState } from "react";
import "../styles/AddProductModal.css";
import { useDispatch } from 'react-redux';

const AddProductModal = ({ addProduct, closeModal }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(addProduct(newProduct));
     closeModal();
   };


  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <h2>Nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Descripción:
            <input
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Imagen URL:
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Añadir producto</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;

AddProductModal.propTypes = {
  addProduct: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};