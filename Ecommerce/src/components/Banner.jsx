import "../styles/Banner.css";
import { useAuth } from "../hooks/useAuth.jsx";

const Banner = () => {
  const { userData } = useAuth();

  return (
    <div className="banner">
      <p className="banner-text">
        {userData ? (
          <>¡{userData.name}, aprovéchate de tu 20% de descuento!</>
        ) : (
          <>Crea una cuenta para disfrutar de nuestros descuentos</>
        )}
      </p>
    </div>
  );
};

export default Banner;
