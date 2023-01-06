import React, { useEffect, useState } from "react";
import "./logButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const LogButton = ({
  type,
  onClickFunction,
  text,
  isAuthError,
  isValidError,
}) => {
  const [isShowSpinner, setIsShowSpinner] = useState(false);

  useEffect(() => {
    if (isAuthError || isValidError) {
      setIsShowSpinner(false);
    }
  }, [isShowSpinner, isAuthError, isValidError]);

  const buttonHandler = () => {
    if (onClickFunction) {
      onClickFunction();
    } else {
      setIsShowSpinner(true);
    }
  };
  return (
    <button className="log-button" type={type} onClick={buttonHandler}>
      {text}{" "}
      {isShowSpinner && (
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
      )}
    </button>
  );
};
