import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, amount) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Paradise Nursery</Link>
          <Link to="/ProductPage">Products</Link>
          <Link to="/CartPage">
            Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProductPage" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/CartPage" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
