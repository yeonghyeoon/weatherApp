const WeatherDisplay = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.city} />
    </div>
  );
};
export default WeatherDisplay;
