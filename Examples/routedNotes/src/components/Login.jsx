/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    onLogin(event.target.user.value);
    history.push('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input name="user" />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
