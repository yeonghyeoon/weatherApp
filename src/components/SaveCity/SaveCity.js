import "../SaveCity/SaveCity.scss";

const SaveCity = (props) => {
  const returnSaveCityList = () => {
    if (props.saveCityData.length > 0) {
      return props.saveCityData.map((saveCity) => (
        <div
          className="saved__cities-card"
          key={saveCity.id}
          onClick={(event) => {
            event.stopPropagation();
            props.handleSavedCity(saveCity.city);
          }}
        >
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
  };

  return (
    <div iclassName="saved__cities">
      <h1 className="saved__cities-header">Saved city</h1>
       <div className="saved__cities-section">{saveCityEl}</div>
    </div>
  );
};
export default SaveCity;
