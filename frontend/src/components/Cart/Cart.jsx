import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from '../../contexts/AppContext';
import {
  removeItemLocalStoreCart, removeProdLocalStoreCart,
} from '../../services/localStore';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem';
import './Cart.css';

function Cart({ prod, load }) {
  const {
    loadCart,
  } = useContext(appContext);

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <li className="cart-info">
      <h2>{prod.name}</h2>
      <p>{`Quantidade: ${prod.qtd}`}</p>
      <p>{`Preço total: R$ ${prod.qtd * prod.price}`}</p>
      <button
        className="cart-info-removeItem"
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
        className="cart-info-removeProd"
        type="button"
        onClick={() => {
          removeProdLocalStoreCart(prod.id);
          load();
        }}
      >
        X

      </button>

    </li>
  );
}

Cart.propTypes = {
  prod: PropTypes.objectOf.isRequired,
  load: PropTypes.func.isRequired,
};

export default Cart;
