function Weather(props) {
  return (
    <div>
      <h3>Description</h3>
      <p>{props.weatherData.description}</p>
      <h3>Main</h3>
      <p>{props.weatherData.main}</p>
      <h3>wind speed</h3>
      <p>{props.wind.speed} m/s</p>
      <h3>wind degree</h3>
      <p>{props.wind.deg} °</p>
      <h3>main </h3>
      <p>{props.mainData.temp} °C</p>
    </div>
  );
}

export default Weather;
