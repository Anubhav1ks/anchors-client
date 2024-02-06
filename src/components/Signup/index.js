import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Header from "../layout/header";
import { useNavigate } from "react-router-dom";
import { handleApiRequest } from "../../functions/services";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiRequest("/user/signup", formData, (data) => {
      navigate("/otp", {
        state: { email: formData.email },
      });
    });
  };

  return (
    <div className={"main"}>
      <Header />
      <div className={styles["signup-container"]}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="mobile"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
