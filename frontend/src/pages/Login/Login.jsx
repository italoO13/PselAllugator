import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { authAccount } from '../../services/api/client';
import appContext from '../../contexts/AppContext';
import Header from '../../components/Header/Header';
import './Login.css';
import login from '../../img/login.png';

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
    <div className="login">
      <Header />

      <div className="login-wrapper">
        <img className="img-login" src={login} alt="imagem de login" />
        <h1 className="login-title">Entrar</h1>
        <form className="login-form">
          <label htmlFor="email">
            <input
              type="text"
              placeholder="Email"
              name="email"
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

          <button type="button" onClick={newSession}>Entrar</button>
          <Link to="/create">
            <p>
              Não tem uma conta ?
              <span className="font-bold text-primary">Criar conta</span>
            </p>

          </Link>

        </form>

        {alert !== '' && <p className="alert-login">{alert}</p>}
      </div>

    </div>
  );
}

export default Login;
