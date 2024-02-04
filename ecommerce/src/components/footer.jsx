import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contacto</h2>
          <p>Email: info@mitienda.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div className="footer-section">
          <h2>Redes Sociales</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h2>Dirección</h2>
          <p>Calle principal, 123</p>
          <p>Ciudad, País</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="copyright">
        <p>&copy; 2024 MiTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
