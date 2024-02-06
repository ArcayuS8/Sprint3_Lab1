import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

 function ProductCard({ product }) {
   return (
     <div className="product-card">
       <div className="product-image-container">
         <img className="product-image" src={product.image} alt={product.title} />
       </div>
       <div className="product-details">
         <div className="product-title">
           <h3>{product.title}</h3>
         </div>
         <div className="product-description">{product.description}</div>
         <div className="product-price">${product.price.toFixed(2)}</div>
       </div>
     </div>
   );
 }

 ProductCard.propTypes = {
   product: PropTypes.shape({
     id: PropTypes.number.isRequired,
     title: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     description: PropTypes.string.isRequired,
     category: PropTypes.string.isRequired,
     image: PropTypes.string.isRequired,
     rating: PropTypes.shape({
       rate: PropTypes.number.isRequired,
       count: PropTypes.number.isRequired
     }).isRequired
   }).isRequired
 };


export default ProductCard;
