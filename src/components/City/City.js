import React from "react";
import "./city.scss";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../redux/actions/cityActions";

export const City = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCity(name));
  };
  return (
    <div className="city" onClick={handleClick}>
      {name}
    </div>
  );
};
