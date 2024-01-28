import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherForecastItem from './WeatherForecastItem';

export default function WeatherForecast({ coordinates, unit }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map((dailyForecast, index) => {
          if (index < 7) {
            return (
              <WeatherForecastItem
                data={dailyForecast}
                key={index}
                unit={unit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    const API_KEY = process.env.REACT_APP_API_KEY_FORECAST;
    const API_URL = process.env.REACT_APP_API_URL_FORECAST;
    const apiUrl = `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((err) => console.log(err));
    return null;
  }
}
