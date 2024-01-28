import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ isLoading: false });
  const [city, setCity] = useState(defaultCity);
  const [unit, setUnit] = useState('celsius');

  function handleResponse(response) {
    if (response.data.message) {
      setWeatherData({ isLoading: false });
      return;
    }
    setWeatherData({
      isLoading: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL;
    const apiUrl = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((err) => console.log(err));
  }

  if (weatherData.isLoading) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button type="submit">Search</button>
        </form>
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
