import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import { tempAccordingToUnit } from '../helpers/tempAccordingToUnit';

export default function WeatherInfo({ data, unit, setUnit }) {
  function tempFeelsLike() {
    let temperature = data.feels_like;
    return tempAccordingToUnit(unit, temperature);
  }

  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.date} />
        </li>
        <li className="description">{data.description}</li>
      </ul>
      <div className="weather-info">
        <div className="temp">
          <WeatherIcon iconCode={data.icon} size={60} />

          <WeatherTemperature
            celsius={data.temperature}
            unit={unit}
            setUnit={setUnit}
          />
        </div>

        <ul>
          <li>Feels like: {tempFeelsLike()}</li>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {Math.round(data.wind)}&nbsp;m/s</li>
        </ul>
      </div>
    </div>
  );
}
