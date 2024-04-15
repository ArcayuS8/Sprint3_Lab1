import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateProductThunk } from '../store/thunks/productsThunks';
import { productValidations } from '../validations/productValidations.js';
import '../styles/ProductEditModal.css';

function ProductEditModal({ product, closeModal }) {
  const { register, handleSubmit, setValue, formState: { errors }, trigger } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    setValue("title", product.title);
    setValue("price", product.price);
    setValue("description", product.description);
  }, [product, setValue]);

  const onSubmit = async (data) => {
    const updatedProduct = { ...product, ...data };
    dispatch(updateProductThunk({ id: product.id, editedProduct: updatedProduct }));
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}></span>
        <h2>Modificar Producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Title:"
            name="title"
            type="text"
            register={register}
            validationRules={productValidations.title}
            errors={errors}
            handleBlur={handleBlur}
          />
          <InputField
            label="Price:"
            name="price"
            type="number"
            register={register}
            validationRules={productValidations.price}
            errors={errors}
            handleBlur={handleBlur}
          />
          <InputField
            label="Description:"
            name="description"
            type="textarea"
            register={register}
            validationRules={productValidations.description}
            errors={errors}
            handleBlur={handleBlur}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ label, name, type, register, validationRules, errors, handleBlur }) => (
  <label>
    {label}
    {type === 'textarea' ? (
      <textarea {...register(name, validationRules)} onBlur={() => handleBlur(name)} />
    ) : (
      <input {...register(name, validationRules)} onBlur={() => handleBlur(name)} type={type} />
    )}
    {errors[name] && <span>{errors[name].message}</span>}
  </label>
);

ProductEditModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validationRules: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default ProductEditModal;
