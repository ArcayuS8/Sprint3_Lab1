import PropTypes from 'prop-types'; // Importa PropTypes
import '../styles/banner.css';

const Banner = ({ userName }) => {
    return (
        <div className='banner'>
            {userName ? (
                <p className='banner-text'>{`${userName}, ¡aprovéchate de tu 20% de descuento!`}</p>
            ) : (
                <p className='banner-text'>¡20% de descuento para nuevos clientes!</p>
            )}
        </div>
    );
};

// Agrega validación de propiedades para userName utilizando PropTypes
Banner.propTypes = {
  userName: PropTypes.string // userName debe ser una cadena
};

export default Banner;
