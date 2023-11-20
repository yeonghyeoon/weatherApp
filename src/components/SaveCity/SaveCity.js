const SaveCity = (props) => {
  const saveCityEl = props.saveCityData.map((saveCity) => (
    <div key={saveCity.id}>
      <h3>{saveCity.city}</h3>
      <p>{saveCity.temp}</p>
      <p>{saveCity.description}</p>
      <p>{saveCity.windSpeed}</p>
      <p>{saveCity.windDeg}</p>
    </div>
  ));
  return (
    <div>
      <h1>Saved city</h1>
      <div>{saveCityEl}</div>
    </div>
  );
};
export default SaveCity;
