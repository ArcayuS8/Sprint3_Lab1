import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>¡Ups! Página no encontrada</h2>
      <p>Parece que has llegado a un callejón sin salida.</p>
      <p>No te preocupes, puedes volver a la página principal.</p>
      <Link to="/" className="go-home-link">Ir a la página principal</Link>
    </div>
  );
};

export default NotFound;
