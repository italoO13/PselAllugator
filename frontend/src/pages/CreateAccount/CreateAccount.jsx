import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { postCreateAccount } from '../../services/api/client';
import './CreateAccount.css';
import imgCreate from '../../img/login.png';

function CreateAccount() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
  });
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const handleInput = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const createNewAccount = async () => {
    try {
      await postCreateAccount(user);
      alert('Conta criada com sucesso');
      navigate('/login');
    } catch (error) {
      if (error.response.data) {
        setAlert(error.response.data.message);
      }
    }
  };

  return (
    <div className="create">
      <Header />
      <div className="create-wrapper">
        <img className="img-create" src={imgCreate} alt="imagem de CreateAccoutn" />
        <h1>Criar uma nova conta</h1>
        <form className="create-form">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              id="name"
              value={user.name}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={user.email}
              onChange={handleInput}
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInput}
            />
          </label>

          <label htmlFor="cpf">
            <input
              type="cpf"
              name="cpf"
              placeholder="CPF"
              id="cpf"
              value={user.cpf}
              onChange={handleInput}
            />
          </label>
          <button type="button" onClick={createNewAccount}>Criar Conta</button>
          <Link to="/login">
            <p>
              Já tem uma conta?
              <span className="font-bold text-primary">Entrar</span>
            </p>

          </Link>
        </form>
        {alert !== '' && <p className="create-login">{alert}</p>}

      </div>
    </div>
  );
}

export default CreateAccount;
