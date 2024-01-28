import React from 'react';
import WeatherIcon from './WeatherIcon';
import { IconContext } from 'react-icons';
import { LuWind, LuSunrise, LuSunset } from 'react-icons/lu';
import { SiRainmeter } from 'react-icons/si';
import { tempAccordingToUnit } from '../helpers/tempAccordingToUnit';

export default function WeatherForecastItem({ data, unit }) {
  function maxTemperature() {
    let temperature = data.temp.max;
    return tempAccordingToUnit(unit, temperature);
  }

  function minTemperature() {
    let temperature = data.temp.min;
    return tempAccordingToUnit(unit, temperature);
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  function date() {
    function zero_first_format(value) {
      if (value < 10) {
        value = '0' + value;
      }
      return value;
    }

    let datetime = new Date(data.dt * 1000);
    let day = zero_first_format(datetime.getDate());
    let month = zero_first_format(datetime.getMonth() + 1);

    return day + '.' + month;
  }

  function time(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  return (
    <IconContext.Provider
      value={{
        color: 'var(--accent-primary)',
        className: 'react-icons',
        size: '18px',
      }}
    >
      <div className="WeatherForecastItem">
        <h3>{day()}</h3>
        <p>{date()}</p>
        <div className="temperatures">
          <p className="max">{maxTemperature()}</p>

          <p className="min">{minTemperature()}</p>
        </div>
        <WeatherIcon iconCode={data.weather[0].icon} size={28} />
        <div className="wind">
          <LuWind />
          <p>{Math.round(data.wind_speed)}&nbsp;m/s</p>
        </div>
        <div className="humidity">
          <SiRainmeter />
          <p>{Math.round(data.humidity)}%</p>
        </div>
        <div className="sunrise">
          <LuSunrise />
          <p>{time(data.sunrise)}</p>
        </div>

        <div className="sunset">
          <LuSunset />
          <p>{time(data.sunset)}</p>
        </div>
      </div>
    </IconContext.Provider>
  );
}
