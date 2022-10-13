import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from '../contexts/AppContext';
import {
  removeItemLocalStoreCart, removeProdLocalStoreCart,
} from '../services/api/localStore';
import ButtonAddItem from './ButtonAddItem';

function Cart({ prod, load }) {
  const {
    loadCart,
  } = useContext(appContext);

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <li>
      <p>{prod.name}</p>
      <p>{`Quantidade: ${prod.qtd}`}</p>
      <p>{`Preço total: R$ ${prod.qtd * prod.price}`}</p>
      <button
        type="button"
        onClick={() => {
          removeItemLocalStoreCart(prod.id);
          load();
        }}
      >
        Remover Item

      </button>
      <ButtonAddItem prod={prod} />
      <button
        type="button"
        onClick={() => {
          removeProdLocalStoreCart(prod.id);
          load();
        }}
      >
        Remover Produto

      </button>

    </li>
  );
}

Cart.propTypes = {
  prod: PropTypes.objectOf.isRequired,
  load: PropTypes.func.isRequired,
};

export default Cart;
