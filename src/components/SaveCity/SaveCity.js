const SaveCity = (props) => {
  console.log(props.saveCityData);
  let saveCityEl;
  if (props.saveCityData.length > 0) {
    saveCityEl = props.saveCityData.map((saveCity) => (
      <div id={saveCity.id} key={saveCity.id}>
        <h3>{saveCity.city}</h3>
        <p>{saveCity.temp}</p>
        <p>{saveCity.description}</p>
        <p>{saveCity.windSpeed}</p>
        <p>{saveCity.windDeg}</p>
      </div>
    ));
  }
  return <div>{saveCityEl}</div>;
};
export default SaveCity;

/* */
