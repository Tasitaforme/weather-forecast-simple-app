import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.date} />
        </li>
        <li className="capitalize">{data.description}</li>
      </ul>
      <div className="weather-info">
        <div className="temp">
          <WeatherIcon iconCode={data.icon} size={60} />

          <WeatherTemperature celsius={data.temperature} />
        </div>

        <ul>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
