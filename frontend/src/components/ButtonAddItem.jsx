import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { qtdMaxProdById } from '../services/localStore';
import appContext from '../contexts/AppContext';

function ButtonAddItem({ prod }) {
  const [qtdProd, setQtdProd] = useState(qtdMaxProdById(prod.id));

  const {
    cart, addCartProd,
  } = useContext(appContext);

  useEffect(() => {
    const loadQtd = () => {
      setQtdProd(qtdMaxProdById(prod.id));
    };
    loadQtd();
  }, [cart]);

  return (
    <button
      type="button"
      disabled={qtdProd >= prod.qtdMax}
      onClick={() => {
        addCartProd(prod);
        setQtdProd(qtdProd + 1);
      }}
    >
      {qtdProd >= prod.qtdMax ? 'Estoque vazio' : 'adicionar'}

    </button>

  );
}

ButtonAddItem.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default ButtonAddItem;
