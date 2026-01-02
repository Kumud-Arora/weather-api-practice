import React from "react"

const ShowWeather = () =>{
     
  const city = data.name;
  const country = data.sys ? data.sys.country : null;
  const temperature = data.main ? data.main.temp : null;
  const pressure = data.main ? data.main.pressure : null;
  const visibility =  data ? data.visibility : null;
  const humidity = data.main ? data.main.humidity : null;
  const clouds =  data.clouds ? data.clouds.all : null;

  const pressureInAtm = (pressure / 1000).toFixed(2);
  const tempInCelcius = (temperature / 10).toFixed(2);
  const visibilityInKM = (visibility / 1000).toFixed(2);

return (
    <React.Fragment>
      <div className="showWeather">
        <div className="weather_main">
          <h1 className="weather_heading">
            Seattle<br /> <span> AR</span>
          </h1>
          <h3 className="temp">Temperature: 25C</h3>
          <hr />
          <div className="weatherData">
            <p>
              Pressure <br /> 10 atm
            </p>
            <p>
              Visibility <br /> 5 Km
            </p>
          </div>
          <div className="weatherData">
            <p>
              Humidity: <br /> 80 %
            </p>
            <p>
              Clouds: <br /> 10 %
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowWeather