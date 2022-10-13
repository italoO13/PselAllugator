/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './AppContext';
import { ReadLocalStoreCart, addLocalStoreCart } from '../services/api/localStore';

function ProviderApp({ children }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(ReadLocalStoreCart());
  const [login] = useState(false);

  const loadCart = () => {
    setCart(ReadLocalStoreCart());
  };

  const addCartProd = (prod) => {
    addLocalStoreCart(prod);
    loadCart();
  };

  const context = {
    products,
    setProducts,
    loading,
    setLoading,
    loadCart,
    cart,
    addCartProd,
    login,
  };

  return (
    <appContext.Provider value={context}>
      {children}
    </appContext.Provider>
  );
}

ProviderApp.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default ProviderApp;
