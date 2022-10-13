import React, { useContext, useEffect, useState } from 'react';
import Cart from '../components/Cart';
import appContext from '../contexts/AppContext';

function ShoppingCart() {
  const {
    cart, loadCart, login,
  } = useContext(appContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      let priceTotal = 0;
      cart.forEach((prod) => {
        priceTotal += Number(prod.price * prod.qtd);
      });
      setTotal(priceTotal);
    };
    calculateTotal();
  }, [cart]);

  const load = () => {
    loadCart();
  };

  return (
    <div className="ShoppingCart">
      <h2>Carrinho de compras</h2>
      <h3>{`Valor Total: R$ ${total}`}</h3>
      <ul>
        {cart.map((prod) => (
          <Cart prod={prod} load={load} />
        ))}
      </ul>

      <button type="button">Fechar Assinatura</button>
      {!login.status
        && <p>É necessário realizar o login para finalizar assinatura</p>}
    </div>
  );
}

export default ShoppingCart;
