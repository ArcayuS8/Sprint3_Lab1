import PropTypes from 'prop-types';
import { useState } from "react";
import "../styles/ProductEditModal.css";
import { saveProduct  } from '../store/thunks/productsThunks.js';
import { useDispatch } from 'react-redux';

function ProductEditModal({ product, closeModal }) {
  const [editedFields, setEditedFields] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
  });
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "price" ? parseFloat(value) : value;
    if (name === "price" && (isNaN(newValue) || newValue <= 0)) {
      setError("El precio debe ser un número válido mayor que cero.");
      return;
    }
    setError(null);
    setEditedFields((prevFields) => ({
      ...prevFields,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      ...editedFields,
    };

    try {
      await dispatch(saveProduct ({id: product.id, editedProduct: updatedProduct}));
      closeModal();
    } catch (error) {
      setError("Error al guardar los cambios. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <h2>Modificar Producto</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={editedFields.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={editedFields.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Descripción:
            <input
              name="description"
              value={editedFields.description}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

ProductEditModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ProductEditModal;
