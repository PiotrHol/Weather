import React, { useEffect, useState } from "react";
import "./setting.scss";
import logo from "../../assets/logo.png";
import { City } from "../City/City";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/actions/cityActions";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

export const Setting = () => {
  const cities = useSelector((state) => state.cities.selected);
  const [mainList, setMainList] = useState([]);
  const [listOfCity, setListOfCity] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("city.list.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setListOfCity(data);
        setMainList(data);
      });
  }, []);

  useEffect(() => {
    if (searchInput) {
      setListOfCity(
        mainList.filter((city) => city.name.startsWith(searchInput))
      );
    } else {
      setListOfCity(mainList);
    }
  }, [searchInput]);

  const handleBackBtn = () => {
    console.log("Back");
  };

  return (
    <div className="setting">
      <div className="setting__logo">
        <img className="setting__logo-img" src={logo} alt="logo" />
        <h1 className="setting__logo-title">Weather App</h1>
      </div>
      <div className="setting__content">
        <div className="setting__selected-city">
          <h3 className="setting__title">Selected cities: (Click to delete)</h3>
          <div className="setting__selected-city-wrapper">
            {cities.map(({ id, name }) => (
              <City key={id} name={name} />
            ))}
          </div>
        </div>
        <div className="setting__city">
          <h3 className="setting__title">
            Select a city: (Click to select - max 6)
          </h3>
          <form className="setting__form">
            <input
              className="setting__input"
              type="text"
              maxLength={40}
              placeholder="Enter a city"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          <div className="setting__list">
            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  itemCount={listOfCity.length}
                  itemSize={50}
                >
                  {({ index, style }) => {
                    const currentCity = listOfCity[index].name;
                    let valiToAdd = true;

                    return (
                      <div
                        className="setting__list-item"
                        style={style}
                        onClick={() => {
                          cities.forEach((city) => {
                            if (city.name === currentCity) {
                              valiToAdd = false;
                            }
                          });
                          if (cities.length < 6 && valiToAdd) {
                            dispatch(addCity(listOfCity[index]));
                          }
                        }}
                      >
                        {listOfCity[index].name}
                      </div>
                    );
                  }}
                </List>
              )}
            </AutoSizer>
          </div>
          <button className="setting__btn" onClick={handleBackBtn}>
            Go to main
          </button>
        </div>
      </div>
    </div>
  );
};
