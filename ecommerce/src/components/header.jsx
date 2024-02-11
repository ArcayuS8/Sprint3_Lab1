import PropTypes from 'prop-types';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

function Header({ onSearchChange, onCartClick, cartCount, onTitleClick, onDarkModeToggle, darkMode }) {
  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="header-left">
          <h1 onClick={onTitleClick}>MiTienda</h1>
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
            <span className="icon" onClick={onCartClick}>🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}</span>
            <span className="icon">❤️</span>
            <span className="icon">👤</span>
            <span className="icon"onClick={onDarkModeToggle} ><FontAwesomeIcon icon={faCircleHalfStroke} /></span>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onDarkModeToggle: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default Header;
