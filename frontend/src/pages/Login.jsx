import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { authAccount } from '../services/api/client';
import appContext from '../contexts/AppContext';
// import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState('');
  const { persistLogin } = useContext(appContext);
  // const navigate = useNavigate();

  const handleInput = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const newSession = async () => {
    try {
      const result = await authAccount(user);
      persistLogin(result.token);
    } catch (error) {
      if (error.response.data) {
        setAlert(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1>Entrar</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>

        <button type="button" onClick={newSession}>Entrar</button>
        <Link to="/create">
          <p>
            Não tem uma conta ?
            <span className="font-bold text-primary">Criar conta</span>
          </p>

        </Link>

      </form>

      {alert !== '' && <p>{alert}</p>}

    </div>
  );
}

export default Login;
