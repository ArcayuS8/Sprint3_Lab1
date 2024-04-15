import { Link } from "react-router-dom";
import "../styles/BackButton.css";

const BackButton = () => {
  return (
    <div className="back-button">
      <Link to="/">Volver</Link>
    </div>
  );
};

export default BackButton;
