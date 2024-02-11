import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/LoginForm.css';

function LoginForm({ user, onLogin, onLogout }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      onLogin({ name, email });
    }
  };

  const handleLogout = () => {
    setName('');
    setEmail('');
    onLogout();
  };

  return (
    <div className="login-form">
      {user ? (
        <div>
          <p>Bienvenido, {user.name}!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h2>Iniciar sesión</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LoginForm;
