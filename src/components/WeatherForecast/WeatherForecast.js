import React from "react";
import "./weatherForecast.scss";

export const WeatherForecast = ({
  date,
  temperature,
  feelsTemp,
  icon,
  description,
}) => {
  return (
    <div className="weather-forecast">
      <div className="weather-forecast__icon">
        <img
          className="weather-forecast__icon-img"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="condition icon"
        />
      </div>
      <div className="weather-forecast__content">
        <div className="weather-forecast__content-box">
          <div className="weather-forecast__date">
            <div className="weather-forecast__date-value-date">
              {date.split(",")[0]}
              <span className="weather-forecast__date-value-char">,</span>
            </div>
            <div className="weather-forecast__date-value-hour">
              {date.split(",")[1]}
            </div>
          </div>
          <div className="weather-forecast__condition">
            <div className="weather-forecast__title">Condition:</div>
            <div className="weather-forecast__value">{description}</div>
          </div>
        </div>
        <div className="weather-forecast__content-box">
          <div className="weather-forecast__feels">
            <div className="weather-forecast__title">Feels like:</div>
            <div className="weather-forecast__value">{feelsTemp} &deg;C</div>
          </div>
          <div className="weather-forecast__temp">
            <div className="weather-forecast__title">Temperature:</div>
            <div className="weather-forecast__value">{temperature} &deg;C</div>
          </div>
        </div>
      </div>
    </div>
  );
};
