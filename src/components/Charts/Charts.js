import React, { useState, useEffect } from "react";
import "./charts.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Charts = ({ id }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_API_WEATHER}&units=metric`
    )
      .then((response) => response.json())
      .then((data) =>
        data.list.forEach((forecast) =>
          setForecastData((prev) => [
            ...prev,
            {
              date: new Date(forecast.dt * 1000).toLocaleString(),
              temperature: forecast.main.temp,
              humidity: forecast.main.humidity,
            },
          ])
        )
      );
  }, []);

  if (forecastData.length) {
    return (
      <div className="charts">
        <div className="charts__data">
          <h2 className="charts__chart-title">5 days temperature forecast</h2>
          <div className="charts__chart">
            <LineChart
              width={1170}
              height={300}
              data={forecastData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="temperature" stroke="#538a9f" />
              <CartesianGrid stroke="#8D979B" />
              <XAxis dataKey="date" />
              <YAxis unit=" &deg;C" />
              <Tooltip />
            </LineChart>
          </div>
        </div>
        <div className="charts__data">
          <h2 className="charts__chart-title">5 days humidity forecast</h2>
          <div className="charts__chart">
            <LineChart
              width={1170}
              height={300}
              data={forecastData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="humidity" stroke="#538a9f" />
              <CartesianGrid stroke="#8D979B" />
              <XAxis dataKey="date" />
              <YAxis unit=" %" />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="charts">
        <h2 className="charts__wait">Loading...</h2>
      </div>
    );
  }
};
