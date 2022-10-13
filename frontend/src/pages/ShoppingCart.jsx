import React, { useEffect, useState } from 'react';
import {
  addLocalStoreCart, ReadLocalStoreCart, removeItemLocalStoreCart, removeProdLocalStoreCart,
} from '../services/api/localStore';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const loadCart = () => {
      const date = ReadLocalStoreCart();
      setCart(date);
    };
    loadCart();
  }, []);

  const load = () => {
    setCart(ReadLocalStoreCart());
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
            <button
              type="button"
              onClick={() => {
                addLocalStoreCart(prod);
                load();
              }}
            >
              Adicionar

            </button>
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
