import React, { useEffect, useState } from "react";
import "./login.scss";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const auth = useSelector((state) => state.auth.id);

  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [auth]);

  const onSubmit = ({ email, password }) => {
    const auth = getAuth();

    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
        } else {
          await signInWithEmailAndPassword(auth, email, password);
        }

        history.push("/home");
      } catch {
        setIsAuthError(true);
      }
    });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__logo">
          <img className="login__logo-img" src={logo} alt="logo" />
          <h1 className="login__logo-title">Weather App</h1>
        </div>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="login__form-label">
            <p>Email:</p>
            <input
              {...register("email", {
                required: "Please enter a valid email address!",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "The specified email is invalid!",
                },
              })}
              className="login__form-input"
              type="text"
            />
            {errors.email && (
              <p className="login__form-error">{errors.email.message}</p>
            )}
          </label>
          <label className="login__form-label">
            <p>Password:</p>
            <input
              {...register("password", {
                required: "Please enter a password!",
                minLength: {
                  value: 8,
                  message: "The password given is too short!",
                },
              })}
              className="login__form-input"
              type="password"
            />
            {errors.password && (
              <p className="login__form-error">{errors.password.message}</p>
            )}
          </label>
          {isSignUp && (
            <label className="login__form-label">
              <p>Repeat password:</p>
              <input
                {...register("repeatedPassword", {
                  required: "Re-enter your password!",
                  validate: (value) =>
                    value === watch("password") ||
                    "The passwords given are not the same!",
                })}
                className="login__form-input"
                type="password"
              />
              {errors.repeatedPassword && (
                <p className="login__form-error">
                  {errors.repeatedPassword.message}
                </p>
              )}
            </label>
          )}
          {isAuthError && (
            <p className="login__form-error">Login error! Try again!</p>
          )}
          <div className="login__form-buttons">
            <button className="login__form-btn">
              {isSignUp ? "Create" : "Log in"}
            </button>
            <button
              type="button"
              className="login__form-btn"
              onClick={() => {
                reset();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp ? "Return" : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
