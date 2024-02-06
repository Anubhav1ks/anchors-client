// Login.jsx
import React, { useState } from "react";
import Styles from "./login.module.scss";
import Header from "../layout/header";
import { handleApiRequest } from "../../functions/services";
import { isAuth, saveRefresToken, saveToken } from "../../functions/Auth";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  if (isAuth()) return <Navigate to="/dashboard" replace />;
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiRequest("/user/Signin", formData, (data) => {
      saveToken(data.data.accessToken, data.data.accessExpiry);
      saveRefresToken(data.data.refreshToken, data.data.refreshExpiry);
      navigate("/dashboard");
    });
  };

  return (
    <div className={Styles.Main}>
      <Header />
      <div className={Styles.logincontainer}>
        <h2 className="text-2xl mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={Styles["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className={Styles["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              onChange={handleInputChange}
            />
          </div>

          <button className={Styles["login-button"]} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
