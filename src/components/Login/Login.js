import React, { useEffect, useState } from "react";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isAuthErrorMessage, setIsAuthErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const auth = useSelector((state) => state.auth.id);
  const cities = useSelector((state) => state.cities.selected);

  useEffect(() => {
    if (auth) {
      if (cities.length !== 0) {
        history.push("/");
      } else {
        history.push("/setting");
      }
    }
  }, [cities]);

  useEffect(() => {
    if (isAuthError) {
      setTimeout(() => setIsAuthError(false), 3000);
    }
  }, [isAuthError]);

  const onSubmit = ({ email, password }) => {
    const auth = getAuth();

    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        if (isSignUp) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await setDoc(doc(getFirestore(), "users", userCredential.user.uid), {
            cities: [],
          });
        } else {
          await signInWithEmailAndPassword(auth, email, password);
        }
      } catch (e) {
        switch (e.code) {
          case "auth/user-not-found":
            setIsAuthErrorMessage("You don't have an account yet. Create one!");
            break;
          case "auth/wrong-password":
            setIsAuthErrorMessage("Incorrect password!");
            break;
          default:
            setIsAuthErrorMessage("Incorrect data!");
            break;
        }
        setIsAuthError(true);
      }
    });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__logo">
          <div className="login__logo-icon-box">
            <FontAwesomeIcon icon={faCloudSun} className="login__logo-icon" />
          </div>
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
            <p className="login__form-error">{isAuthErrorMessage}</p>
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
