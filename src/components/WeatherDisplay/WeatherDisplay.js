import "./WeatherDisplay.scss"

const WeatherDisplay = (props) => {

  return (
    <div className="weather__display">
      <img className="weather__display-image" src={props.imgSrc} />
    </div>
  );
};
export default WeatherDisplay;
