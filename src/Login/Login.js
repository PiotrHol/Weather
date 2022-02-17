import React, { useState } from "react";
import "./login.scss";
import logo from "../assets/logo.png";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__logo">
          <img className="login__logo-img" src={logo} alt="logo" />
          <h1 className="login__logo-title">Weather App</h1>
        </div>
        <form className="login__form">
          <label className="login__form-label">
            <p>Email:</p>
            <input className="login__form-input" type="text" />
          </label>
          <label className="login__form-label">
            <p>Hasło:</p>
            <input className="login__form-input" type="password" />
          </label>
          {isSignUp && (
            <label className="login__form-label">
              <p>Powtórz hasło:</p>
              <input className="login__form-input" type="password" />
            </label>
          )}
          <div className="login__form-buttons">
            <button className="login__form-btn">
              {isSignUp ? "Utwórz konto" : "Zaloguj się"}
            </button>
            <button
              className="login__form-btn"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp ? "Wróć" : "Załóż konto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
