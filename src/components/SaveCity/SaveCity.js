import '../SaveCity/SaveCity.scss'

const SaveCity = (props) => {
  let saveCityEl;
  if (props.saveCityData) {
    saveCityEl = props.saveCityData.map((saveCity) => (
      <div key={saveCity.id}>
        <h3 className="saved__cities-city">{saveCity.city}</h3>
        <p className="saved__cities-temperature">{saveCity.temp}°C</p>
        <p className="saved__cities-description">{saveCity.description}</p>
        {/* <p>{saveCity.windSpeed}</p>
        <p>{saveCity.windDeg}</p> */}
      </div>
    ));
  }

  return (
    <div className="saved__cities">
      <h1 className="saved__cities-header">Saved Cities</h1>
      <div className="saved__cities-card">{saveCityEl}</div>
    </div>
  );
};
export default SaveCity;
