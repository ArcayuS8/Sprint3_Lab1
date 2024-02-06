import PropTypes from 'prop-types';
import '../styles/Header.css';

function Header({ onSearchChange }) {
    return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1>MiTienda</h1>
          <nav>
            <ul>
              <li><a href="#">INICIO</a></li>
              <li><a href="#">CATEGORÍAS</a></li>
              <li><a href="#">OFERTAS</a></li>
              <li><a href="#">CONTACTO</a></li>
            </ul>
          </nav>
        </div>
        <div className="search">
          <input type="text" placeholder="Buscar productos" onChange={onSearchChange} />
        </div>
        <div className="header-right">
          <div className="icons">
            <span className="icon">🛒</span>
            <span className="icon">❤️</span>
            <span className="icon">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired
};

export default Header;
