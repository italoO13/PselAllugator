import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <h1>Allugator</h1>
      <ul>
        <Link to="/"><li>Products</li></Link>
        <Link to="/cart"><li>Carrinho</li></Link>
        <Link to="/create"><li>Criar Conta</li></Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
      Header
    </header>
  );
}

export default Header;
