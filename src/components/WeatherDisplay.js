import React from 'react';
import '../styles/weatherdisplay.css';

const WeatherDisplay = ({weather}) => {
  return (
    <div className="weather-display" data-testid="weather-display">
      <h1 className='city'>Weather for {weather.city}</h1>
      <p className='weather-info'>Temperature: {weather.temperature}</p>
      <p className='weather-info'>Weather: {weather.weather}</p>
    </div>
  );
}; 

export default WeatherDisplay;