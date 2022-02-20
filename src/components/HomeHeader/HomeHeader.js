import React from "react";
import "./homeHeader.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/actions/authActions";

export const HomeHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await signOut(getAuth());
    dispatch(removeUser());
  }

  return (
    <header className="home-header">
      <div className="home-header__logo">
        <img className="home-header__img" src={logo} alt="logo" />
        <h1 className="home-header__title">Weather App</h1>
      </div>
      <FontAwesomeIcon
        icon={faGear}
        className="home-header__icon home-header__icon--setting"
        onClick={() => history.push("/setting")}
      />
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="home-header__icon"
        onClick={handleLogOut}
      />
    </header>
  );
};
