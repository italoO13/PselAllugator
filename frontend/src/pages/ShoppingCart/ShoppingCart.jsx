import React, { useContext, useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import appContext from '../../contexts/AppContext';
import { postCreateSubscription } from '../../services/api/subscription';
import Header from '../../components/Header/Header';
import './ShoppingCart.css';

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
      <div className="ShoppingCart-wrapper">
        <h2 className="ShoppingCart-title">Carrinho de compras</h2>
        <h3>{`Valor Total: R$ ${total}`}</h3>
        <ul className="ShoppingCart-wrapper-carts">
          {cart.map((prod) => (
            <Cart prod={prod} load={load} />
          ))}
        </ul>

        {!login.status ? <p className="alert-ShoppingCart">É necessário realizar o login para finalizar assinatura</p>

          : <button type="button" className="shoppingCart-btn" onClick={createSubscription}>Fechar Assinatura</button>}

        {alert && <p className="alert-ShoppingCart">{alert}</p>}
        {success && <p className="sucess-ShoppingCart">Produtos assinados com sucesso</p>}

      </div>

    </div>
  );
}

export default ShoppingCart;
