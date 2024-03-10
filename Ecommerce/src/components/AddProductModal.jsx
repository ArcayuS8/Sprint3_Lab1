import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { productValidations } from '../validations/productValidations.js';
import '../styles/AddProductModal.css';

const AddProductModal = ({ addProduct, closeModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className='close-btn' onClick={closeModal}></span>
        <h2>Nuevo producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Título:"
            name="title"
            type="text"
            register={register}
            validationRules={productValidations.title}
            errors={errors}
            handleBlur={handleBlur}
          />
          <InputField
            label="Precio:"
            name="price"
            type="number"
            register={register}
            validationRules={productValidations.price}
            errors={errors}
            handleBlur={handleBlur}
          />
          <InputField
            label="Descripción:"
            name="description"
            type="textarea"
            register={register}
            validationRules={productValidations.description}
            errors={errors}
            handleBlur={handleBlur}
          />
          <InputField
            label="URL Imagen:"
            name="image"
            type="text"
            register={register}
            validationRules={productValidations.image}
            errors={errors}
            handleBlur={handleBlur}
          />
          <button type='submit'>Añadir producto</button>
        </form>
      </div>
    </div>
  );
};

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

AddProductModal.propTypes = {
  addProduct: PropTypes.func.isRequired,
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

export default AddProductModal;
