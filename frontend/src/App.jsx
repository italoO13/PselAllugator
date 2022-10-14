import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderApp from './contexts/providerApp';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductsDetails from './pages/ProductsDetails';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <ProviderApp>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </ProviderApp>
  );
}

export default App;
