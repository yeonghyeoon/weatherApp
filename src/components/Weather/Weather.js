import './Weather.scss'

function Weather(props) {

  let time = new Date().toLocaleTimeString()

  return (
    <div className="weather__card">
      <h3>{props.name}</h3>
      <p>{props.weatherData.description}</p>
      <p>{props.weatherData.main}</p>
      <h3>Wind Speed</h3>
      <p>{props.wind.speed}</p>
      <h3>Wind Degrees</h3>
      <p>{props.wind.deg}</p>
      <h3>Temperature</h3>
      <p>{props.mainData.temp}</p>
      <h3>Current Time</h3>
      <p>{time}</p>
    </div>
  );
}

export default Weather;
