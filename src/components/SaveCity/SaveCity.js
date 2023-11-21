import "../SaveCity/SaveCity.scss";
import nightIcons from "../../data/nightIcons.json";

const SaveCity = (props) => {
  const returnSaveCityList = () => {
    if (props.saveCityData.length > 0) {
      return props.saveCityData.map((saveCity) => {
        const savedCityIcon = (weatherIcon) => {
          let src;
          nightIcons.forEach((img) => {
            if (img.mainName === weatherIcon) {
              src = img.src;
              console.log(src);
              console.log(img.mainName === weatherIcon);
            }
          });
          return src;
        };

        const iconSrc = savedCityIcon(saveCity.description.toLowerCase());

        return (
          <div
            className="saved__cities-card"
            key={saveCity.id}
            onClick={(event) => {
              event.stopPropagation();
              props.handleSavedCity(saveCity.city);
            }}
          >
            <img
              className="saved__cities-image"
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/starry-night.svg"
              alt={saveCity.description}
            />
            <div className="saved__cities-data">
              <h3 className="saved__cities-city">{saveCity.city}</h3>
              <p className="saved__cities-description">{saveCity.description}</p>
              <div className="saved__cities-temp">
                <p className="saved__cities-temperature">{saveCity.temp}°C</p>
                <img className="saved__cities-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-colder.svg" alt="temperature" />
              </div>
              <div className="saved__cities-speed">
                <p>{saveCity.windSpeed} km/h</p>
                <img className="saved__cities-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg" alt="wind" />
              </div>
            </div>
            {/* Delete city */}
            <button
              className="weather__button--delete"
              onClick={(e) => {
                props.handleCityDelete();
              }}
            >
              Remove from Favourite
            </button>
          </div>
        );
      });

          
      
    
    }
    return null;
  };

  return (
    <div className="saved__cities">
      <h1 className="saved__cities-header">Saved Cities</h1>
      <div className="saved__cities-section">{returnSaveCityList()}</div>
    </div>
  );
};

export default SaveCity;
