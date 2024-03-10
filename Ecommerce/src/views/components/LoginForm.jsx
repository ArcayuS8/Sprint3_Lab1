import PropTypes from "prop-types";
import "../styles/LoginForm.css";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { userValidations } from "../../validations/userValidations.js";

const LoginForm = () => {
  const { handleLogin, handleLogout, userData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm();

  const onSubmit = (data) => {
    const { nombre, email } = data;
    handleLogin({ name: nombre, email });
    location.state?.pathname ? navigate(location.state.pathname) : navigate("/");
  };

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Nombre:"
          type="text"
          name="nombre"
          register={register}
          validationRules={userValidations.nombre}
          errors={errors}
          handleBlur={handleBlur}
        />
        <InputField
          label="Email:"
          type="email"
          name="email"
          register={register}
          validationRules={userValidations.email}
          errors={errors}
          handleBlur={handleBlur}
        />
        <InputField
          label="Contraseña:"
          type="password"
          name="password"
          register={register}
          validationRules={userValidations.password}
          errors={errors}
          handleBlur={handleBlur}
        />
        <InputField
          label="Repetir contraseña:"
          type="password"
          name="confirmPassword"
          register={register}
          validationRules={{
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          }}
          errors={errors}
          handleBlur={handleBlur}
        />
        {!userData && <button type="submit">Login</button>}
      </form>
      {userData && (
        <div className="user-info">
          <button onClick={onClickLogout} type="button">
            Logout
          </button>
          <p>¿Quieres cerrar sesión, {userData.name}?</p>
        </div>
      )}
    </div>
  );
};

const InputField = ({ label, type, name, register, validationRules, errors, handleBlur }) => (
  <label>
    {label}
    <input
      type={type}
      {...register(name, validationRules)}
      onBlur={() => handleBlur(name)}
    />
    {errors[name] && <span>{errors[name].message}</span>}
  </label>
);

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  userData: PropTypes.object,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validationRules: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default LoginForm;
