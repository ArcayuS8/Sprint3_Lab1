import { useState } from 'react';
import Header from './components/header.jsx';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import LoginForm from './components/LoginForm.jsx';
import data from './assets/data.json';
import Banner from './components/banner.jsx';
import CartSection from './components/CartSection';
import useAuth from './hooks/useAuth.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const { user, login, logout } = useAuth();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleTitleClick = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header
        onSearchChange={handleSearchChange}
        onCartClick={handleCartClick}
        cartCount={cartProducts.length}
        onTitleClick={handleTitleClick}
        onDarkModeToggle={handleDarkModeToggle}
        darkMode={darkMode}
      />
      {showCart ? (
        <CartSection
          products={cartProducts}
          user={user}
          onLogin={login}
          onLogout={logout}
        />
      ) : (
        <>
          <Banner userName={user ? user.name : ''} />
          {showProducts && (
            <div className="product-list">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  user={user}
                  onLogin={login}
                  onLogout={logout}
                />
              ))}
            </div>
          )}
          <LoginForm user={user} onLogin={login} onLogout={logout} />
        </>
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;