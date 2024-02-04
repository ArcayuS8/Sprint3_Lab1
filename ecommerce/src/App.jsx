import { useState } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import data from './assets/data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header onSearchChange={handleSearchChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
