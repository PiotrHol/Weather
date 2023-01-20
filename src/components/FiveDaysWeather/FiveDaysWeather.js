import React, { useState, useEffect } from "react";
import "./fiveDaysWeather.scss";
import classNames from "classnames";
import { WeatherForecast } from "../WeatherForecast/WeatherForecast";

export const FiveDaysWeather = ({ id }) => {
  const [forecastData, setForecastData] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_API_WEATHER}&units=metric`
    )
      .then((response) => response.json())
      .then((data) =>
        data.list.forEach((forecast) =>
          setForecastData((prev) => [
            ...prev,
            {
              id: forecast.dt,
              date: new Date(forecast.dt * 1000).toLocaleString(),
              temperature: forecast.main.temp,
              feelsLike: forecast.main.feels_like,
              icon: forecast.weather[0].icon,
              description: forecast.weather[0].main,
            },
          ])
        )
      );
  }, []);

  return (
    <div
      className={classNames("five-days-weather", {
        "five-days-weather--hide": !isShow,
      })}
    >
      <div className="five-days-weather__list">
        {forecastData.length > 0 ? (
          forecastData.map(
            ({ id, date, temperature, feelsLike, icon, description }) => (
              <WeatherForecast
                key={id}
                date={date}
                temperature={temperature}
                feelsTemp={feelsLike}
                icon={icon}
                description={description}
              />
            )
          )
        ) : (
          <div className="five-days-weather__list-load">Loading...</div>
        )}
        {}
      </div>
    </div>
  );
};
