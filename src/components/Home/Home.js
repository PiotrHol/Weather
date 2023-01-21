import React, { useEffect, useState } from "react";
import "./home.scss";
import { Navigation } from "../Navigation/Navigation";
import { Popup } from "../Popup/Popup";
import { useSelector } from "react-redux";
import { Weather } from "../Weather/Weather";
import { Settings } from "../Settings/Settings";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/actions/cityActions";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const Home = () => {
  const cities = useSelector((state) => state.cities.selected);
  const [isShowSettingsPopup, setIsShowSettingsPopup] = useState(false);
  const [isSelectedCity, setIsSelectedCity] = useState(true);
  const [settingsSelectedCities, setSettingsSelectedCities] = useState(cities);
  const auth = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cities.length === 0) {
      setIsShowSettingsPopup(true);
    }
  }, []);

  const settingsPopupClickHandler = async () => {
    if (settingsSelectedCities.length > 0) {
      setIsShowSettingsPopup(false);
      dispatch(setCity(settingsSelectedCities));
      await updateDoc(doc(getFirestore(), "users", auth), {
        cities: settingsSelectedCities,
      });
    } else {
      setIsSelectedCity(false);
    }
  };

  return (
    <div className="home">
      <Navigation setShowSettings={(value) => setIsShowSettingsPopup(value)} />
      <Popup
        isShow={isShowSettingsPopup}
        onCloseFunction={settingsPopupClickHandler}
      >
        <Settings
          cities={settingsSelectedCities}
          setCities={(value) => setSettingsSelectedCities(value)}
          isSelectedCity={isSelectedCity}
          setIsSelectedCity={(value) => setIsSelectedCity(value)}
        />
      </Popup>
      <div className="home__weather">
        {cities.map((city) => (
          <Weather key={city.id} id={city.id} name={city.name} />
        ))}
      </div>
    </div>
  );
};
