/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './AppContext';

function ProviderApp({ children }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const context = {
    products,
    setProducts,
    loading,
    setLoading,
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
