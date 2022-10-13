/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from './AppContext';
import { ReadLocalStoreCart, addLocalStoreCart } from '../services/localStore';

function ProviderApp({ children }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(ReadLocalStoreCart());
  const [login, setLogin] = useState({
    status: false,
    token: '',
  });

  useEffect(() => {
    const verifyLogin = () => {
      const tokenLocal = localStorage.getItem('token') || '';
      if (tokenLocal !== '') {
        return setLogin({
          status: true,
          token: tokenLocal,
        });
      }
      return setLogin({
        status: false,
        token: '',
      });
    };

    verifyLogin();
  }, []);

  const loadCart = () => {
    setCart(ReadLocalStoreCart());
  };

  const addCartProd = (prod) => {
    addLocalStoreCart(prod);
    loadCart();
  };

  const persistLogin = (token) => {
    localStorage.setItem('token', token);
    setLogin({
      status: true,
      token,
    });
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
    persistLogin,
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
