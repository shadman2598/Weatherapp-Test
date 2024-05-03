import React from 'react';
import './App.css';
import WeatherData from './weatherdata.json';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {  // Functional Component
  return (
    <div className="App">
      <div className="title">
        <h1>Weather App</h1>
      </div>
      <div className="weather-display">
        {
          WeatherData.map((weather) => {
            return <WeatherDisplay key={weather.city} weather={weather} />
          })
        }
      </div>
    </div>
  );
}

export default App;