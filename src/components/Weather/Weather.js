import React, { useEffect, useState } from "react";
import "./weather.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

export const Weather = ({ id, name }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_API_WEATHER}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));

    const intervalId = setInterval(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_API_WEATHER}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (weatherData) {
    return (
      <div className="weather">
        <div className="weather__main">
          <h2 className="weather__main-title">{name}</h2>
          <div className="weather__main-weather">
            <div className="weather__main-icon">
              <img
                className="weather__main-img"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="condition icon"
              />
            </div>
            <div className="weather__main-value">
              <h3 className="weather__main-head">
                {weatherData.main.temp} &deg;C
              </h3>
              <p className="weather__main-text weather__main-text--feels">
                Feels like: {weatherData.main.feels_like} &deg;C
              </p>
              <p className="weather__main-text">
                {weatherData.weather[0].main}
              </p>
            </div>
          </div>
        </div>
        <div className="weather__details">
          <div className="weather__column">
            <p className="weather__details-text">
              Max temperature:{" "}
              <span className="weather__details-value">
                {weatherData.main.temp_max} &deg;C
              </span>
            </p>
            <p className="weather__details-text">
              Min temperature:{" "}
              <span className="weather__details-value">
                {weatherData.main.temp_min} &deg;C
              </span>
            </p>
            <p className="weather__details-text">
              Pressure:{" "}
              <span className="weather__details-value">
                {weatherData.main.pressure} hPa
              </span>
            </p>
            <p className="weather__details-text">
              Humidity:{" "}
              <span className="weather__details-value">
                {weatherData.main.humidity} %
              </span>
            </p>
          </div>
          <div className="weather__column">
            <p className="weather__details-text">
              Condition:{" "}
              <span className="weather__details-value">
                {weatherData.weather[0].description}
              </span>
            </p>
            <p className="weather__details-text">
              Clouds:{" "}
              <span className="weather__details-value">
                {weatherData.clouds.all} %
              </span>
            </p>
            <p className="weather__details-text">
              Wind:{" "}
              <span className="weather__details-value">
                {weatherData.wind.speed} <sup>m</sup>/<sub>s</sub>{" "}
                <FontAwesomeIcon
                  style={{ transform: `rotate(${weatherData.wind.deg}deg)` }}
                  icon={faLongArrowAltUp}
                  className="weather__details-arrow"
                />
              </span>
            </p>
            <p className="weather__details-text">
              Rain (last hour):{" "}
              <span className="weather__details-value">
                {weatherData.rain ? weatherData.rain["1h"] : "0"} mm
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather">
        <h1 className="weather__loading">Loading ...</h1>
      </div>
    );
  }
};
