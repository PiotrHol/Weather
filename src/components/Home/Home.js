import React from "react";
import "./home.scss";
import { Navigation } from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { Weather } from "../Weather/Weather";

export const Home = () => {
  const cities = useSelector((state) => state.cities.selected);

  return (
    <div className="home">
      <Navigation />
      <div className="home__weather">
        {cities.map((city) => (
          <Weather key={city.id} id={city.id} name={city.name} />
        ))}
      </div>
    </div>
  );
};
