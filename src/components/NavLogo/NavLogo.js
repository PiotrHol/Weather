import React from "react";
import "./navLogo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export const NavLogo = ({ setIsShowMenu }) => {
  return (
    <div className="nav-logo">
      <div className="nav-logo__content">
        <FontAwesomeIcon
          icon={faCloudSun}
          className="nav-logo__icon"
          onClick={setIsShowMenu}
        />
      </div>
    </div>
  );
};
