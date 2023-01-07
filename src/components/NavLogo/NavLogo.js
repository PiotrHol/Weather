import React from "react";
import "./navLogo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export const NavLogo = () => {
  return (
    <div className="nav-logo">
      <FontAwesomeIcon icon={faCloudSun} className="nav-logo__icon" />
    </div>
  );
};
