import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const history = useHistory();
  const getUser = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const getPassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const myAuthenticate = (event) => {
    event.preventDefault();
    auth.login(username, password);
    history.push('/');
  };

  // function authenticate(event) {
  //   event.preventDefault();
  //   auth.login();
  //   history.push('/');
  // }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={myAuthenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" onChange={getUser} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" onChange={getPassword} />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
