import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postCreateAccount } from '../services/api/client';

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
    <div className="CreateAccount">
      <h1>Criar uma nova conta</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            type="cpf"
            name="cpf"
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
      {alert !== '' && <p>{alert}</p>}
    </div>
  );
}

export default CreateAccount;
