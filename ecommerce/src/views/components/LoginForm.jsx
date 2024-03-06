// Aqui se renderiza un formulario donde los usuarios pueden ingresar su nombre y correo electrónico para iniciar sesión

import "../styles/LoginForm.css";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useLocation, useNavigate } from "react-router";

const LoginForm = () => {
  const { handleLogin, handleLogout, userData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const email = form.email.value;

    if (nombre && email) {
      handleLogin({ name: nombre, email });
      navigate(location.state.pathname);
      form.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
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

export default LoginForm;
