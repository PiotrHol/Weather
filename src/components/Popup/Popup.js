import React from "react";
import "./popup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Popup = ({ isShow, onCloseFunction, children }) => {
  if (isShow) {
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__close">
            <FontAwesomeIcon
              icon={faTimes}
              className="popup__close-btn"
              onClick={onCloseFunction}
            />
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
