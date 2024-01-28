import React from 'react';

export default function WeatherTemperature({ celsius, unit, setUnit }) {
  function showFahrenheit(e) {
    e.preventDefault();
    setUnit('fahrenheit');
  }

  function showСelsius(e) {
    e.preventDefault();
    setUnit('celsius');
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature">
        <p className="temperature">{Math.round(celsius)}</p>
        <p className="unit">
          °C |{' '}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <p className="temperature">{Math.round(fahrenheit())}</p>
        <p className="unit">
          °F |{' '}
          <a href="/" onClick={showСelsius}>
            °C{' '}
          </a>
        </p>
      </div>
    );
  }
}
