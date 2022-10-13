import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderApp from './contexts/providerApp';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <ProviderApp>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>

    </ProviderApp>
  );
}

export default App;
