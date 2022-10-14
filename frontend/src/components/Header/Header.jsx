import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-imgwrapper">
          <img src={logo} alt="logo" />
        </div>
        <ul className="header-nav">
          <Link to="/"><li>Products</li></Link>
          <Link to="/cart"><li>Carrinho</li></Link>
          <Link to="/create"><li>Criar Conta</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>

      </div>
    </header>
  );
}

export default Header;
