import React, { useContext, useEffect } from 'react';
import Cart from '../components/Cart';
import appContext from '../contexts/AppContext';

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
          <Cart prod={prod} load={load} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
