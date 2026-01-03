import React, { useState, useEffect } from 'react';
import "./styles.css"
import Header from "./Components/Header"
import InputCity from './Components/InputCity';
import ShowWeather from './Components/ShowWeather';

const App = ()=>{
  const [inputCity, setInputCity] = useState("Seattle")
  const [cityName, setCityName] = useState("Seattle")
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setInputCity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  }

  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={{api_key_weather_app}}';

  async function fetchData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }
  }

  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  return (
    <div>
     <Header/>
     <InputCity
        city = {inputCity}
        onInputHandler={inputHandler}
        onsubmitHandler={submitHandler}
     />
     {error ? (
        <h3 className="error">No data found :( </h3>
     ) : (
        <ShowWeather data={weatherData} />
        )}
    </div>
  )
}

export default App



