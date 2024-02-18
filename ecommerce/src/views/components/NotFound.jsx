import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Importamos el archivo de estilos CSS

const NotFound = () => {
  return (
    <div className="not-found-container"> {/* Aplicamos la clase del contenedor */}
      <h2>¡Ups! Página no encontrada</h2>
      <p>Parece que has llegado a un callejón sin salida.</p>
      <p>No te preocupes, puedes volver a la página principal.</p>
      <Link to="/" className="go-home-link">Ir a la página principal</Link> {/* Aplicamos la clase al enlace */}
    </div>
  );
};

export default NotFound;
