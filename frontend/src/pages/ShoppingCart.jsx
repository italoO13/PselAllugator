import React, { useContext, useEffect } from 'react';
import Cart from '../components/Cart';
import appContext from '../contexts/AppContext';

function ShoppingCart() {
  const {
    cart, loadCart, login,
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

      <button type="button">Fechar Assinatura</button>
      {!login
        && <p>É necessário realizar o login para finalizar assinatura</p>}
    </div>
  );
}

export default ShoppingCart;
