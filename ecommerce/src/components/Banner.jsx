import "../styles/Banner.css";
import { useAuth } from "../hooks/useAuth.jsx";

const Banner = () => {
  const { isLoggedIn, userData } = useAuth();

  return (
    <div className="banner">
      <p className="banner-text">
        {isLoggedIn ? (
          <>¡ {userData.name}, aprovéchate de tu 20% de descuento !</>
        ) : (
          <>20% de descuento para nuestros clientes</>
        )}
      </p>
    </div>
  );
};

export default Banner;
