import './Weather.scss'

function Weather(props) {

  let time = new Date().toLocaleTimeString()

  return (
    <div className="weather__details">
      <h3 className="weather__city">{props.city}</h3>

      <h2 className="weather__title">Temperature</h2>
      <p className="weather__subtext">{props.mainData.temp}°C</p>
      
      <p className="weather__subtext">{props.weatherData.description}</p>
      <p className="weather__subtext">{props.weatherData.main}</p>

      <div className="weather__stats">
        <div className="weather__speed">
          <h2 className="weather__title">Wind <br/> Speed</h2>
          <p className="weather__subtext">{props.wind.speed} km/h</p>
        </div>

        <div className='weather__degrees'>
          <h2 className="weather__title">Wind <br/> Degrees</h2>
          <p className="weather__subtext">{props.wind.deg}°</p>
        </div>
      </div>
      
      <h2 className="weather__title">Current Time</h2>
      <p className="weather__subtext">{time}</p>
    </div>
  );
}

export default Weather;
