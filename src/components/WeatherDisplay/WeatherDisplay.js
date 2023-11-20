import "./WeatherDisplay.scss"

const WeatherDisplay = (props) => {

  return (
    <div className="weather__display">
      <img className="weather__display-image" src={props.imgSrc} alt={props.city}/>
    </div>
  );
};
export default WeatherDisplay;
