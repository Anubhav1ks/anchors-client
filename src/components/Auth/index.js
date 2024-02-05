// Login.jsx

import React from 'react';
import Styles from './login.module.scss';

const Login = () => {
  return (
    <div className={Styles.logincontainer}>
      <h2 className="text-2xl mb-6">Login</h2>

      <div className={Styles['form-group']}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className={Styles['form-group']}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <button className={Styles['login-button']} type="submit">
        Login
      </button>
    </div>
  );
};

export default Login;
