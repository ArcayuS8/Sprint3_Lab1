import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@mitienda.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Dirección</h3>
          <p>Calle Principal, 123</p>
          <p>Ciudad, País</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 MiTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
