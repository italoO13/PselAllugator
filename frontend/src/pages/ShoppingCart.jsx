import React, { useContext, useEffect } from 'react';
import ButtonAddItem from '../components/ButtonAddItem';
import appContext from '../contexts/AppContext';
import {
  removeItemLocalStoreCart, removeProdLocalStoreCart,
} from '../services/api/localStore';

function ShoppingCart() {
  const {
    cart, loadCart,
  } = useContext(appContext);

  useEffect(() => {
    loadCart();
  }, []);

  const load = () => {
    loadCart();
  };

  return (
    <div className="ShoppingCart">
      <h2>Carrinho de compras</h2>
      <ul>
        {cart.map((prod) => (
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
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
