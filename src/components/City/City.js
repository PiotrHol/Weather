import React from "react";
import "./city.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity } from "../../redux/actions/cityActions";
import { getFirestore, doc, updateDoc, arrayRemove } from "firebase/firestore";

export const City = ({ city }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.id);

  const handleClick = async () => {
    dispatch(deleteCity(city.name));
    await updateDoc(doc(getFirestore(), "users", auth), {
      cities: arrayRemove(city),
    });
  };
  return (
    <div className="city" onClick={handleClick}>
      {city.name}
    </div>
  );
};
