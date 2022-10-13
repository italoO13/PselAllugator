import React, { useContext, useEffect, useState } from 'react';
import Cart from '../components/Cart';
import appContext from '../contexts/AppContext';
import { postCreateSubscription } from '../services/api/subscription';
import Header from '../components/Header';
// import { removeItemLocalStoreCart } from '../services/localStore';

function ShoppingCart() {
  const {
    cart, loadCart, login,
  } = useContext(appContext);
  const [total, setTotal] = useState(0);
  const [alert, setAlert] = useState('');
  const [success, setSuccess] = useState(false);

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

  const createSubscription = async () => {
    try {
      setSuccess(false);
      const promises = cart.map((prod) => postCreateSubscription(prod.id, prod.qtd));
      await Promise.all(promises);
      setSuccess(true);
      localStorage.removeItem('cart');
      load();
    } catch (error) {
      if (error.response.data) {
        setAlert(error.response.data.message);
      }
    }
  };

  return (
    <div className="ShoppingCart">
      <Header />
      <h2>Carrinho de compras</h2>
      <h3>{`Valor Total: R$ ${total}`}</h3>
      <ul>
        {cart.map((prod) => (
          <Cart prod={prod} load={load} />
        ))}
      </ul>

      <button type="button" onClick={createSubscription}>Fechar Assinatura</button>
      {!login.status
        && <p>É necessário realizar o login para finalizar assinatura</p>}

      {alert && <p>{alert}</p>}
      {success && <p>Produtos assinados com sucesso</p>}

    </div>
  );
}

export default ShoppingCart;
