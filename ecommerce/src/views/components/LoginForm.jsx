// Aqui se renderiza un formulario donde los usuarios pueden ingresar su nombre y correo electrónico para iniciar sesión

import { useState } from 'react';
import "../styles/LoginForm.css";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useLocation, useNavigate } from "react-router";

const LoginForm = () => {
  const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() && email.trim()) {
      if (validateEmail(email)) {
        handleLogin({ name: nombre, email });
        navigate(location.state?.pathname || '/');
        setNombre('');
        setEmail('');
      } else {
        alert('Por favor, introduce un correo electrónico válido.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
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
          <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {!isLoggedIn && <button type="submit">Login</button>}
      </form>
      {isLoggedIn && (
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
