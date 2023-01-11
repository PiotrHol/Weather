import React from "react";
import "./navMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/actions/authActions";
import classNames from "classnames";

export const NavMenu = ({ isShowMenu, setIsShowMenu, setIsShowSettings }) => {
  const dispatch = useDispatch();

  const handleOpenSettings = () => {
    setIsShowMenu(false);
    setIsShowSettings(true);
  };

  const handleLogOut = async () => {
    await signOut(getAuth());
    dispatch(removeUser());
  };

  return (
    <div className={classNames("nav-menu", { "nav-menu--hide": !isShowMenu })}>
      <FontAwesomeIcon
        icon={faGear}
        className="nav-menu__icon"
        title="Setting"
        onClick={handleOpenSettings}
      />
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="nav-menu__icon"
        title="Log out"
        onClick={handleLogOut}
      />
    </div>
  );
};
