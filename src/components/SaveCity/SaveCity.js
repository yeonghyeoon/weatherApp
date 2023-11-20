import '../SaveCity/SaveCity.scss'

const SaveCity = (props) => {
  let saveCityEl;
  if (props.saveCityData) {
    saveCityEl = props.saveCityData.map((saveCity) => (
      <div className="saved__cities-card" key={saveCity.id}>
        <img className="saved__cities-image" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sun-hot.svg" />
        <div className="saved__cities-data">
          <h3 className="saved__cities-city">{saveCity.city}</h3>
          <p className="saved__cities-temperature">{saveCity.temp}°C</p>
          <p className="saved__cities-description">{saveCity.description}</p>
          <p>{saveCity.windSpeed} km/h</p>
        </div>
      </div>
    ));
  }

  return (
    <div className="saved__cities">
      <h1 className="saved__cities-header">Saved Cities</h1>
      <div className="saved__cities-section">{saveCityEl}</div>
    </div>
  );
};
export default SaveCity;
