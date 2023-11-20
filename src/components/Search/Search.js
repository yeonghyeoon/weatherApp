import "./Search.css";
import searchIcon from "../../assets/icons/search.svg";

const Search = (props) => {
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      props.getData();
      console.log(e)
    } /**else if ((e.target.value == null)&& (e.key === "Enter") || (e.target.value == "")&& (e.key === "Enter")) {
      alert("type location")
    } **/
    return;
  };

  return (
    <div className="form-search">
      <input
        className="input-location"
        placeholder="Search Location"
        onChange={(event) => {
          event.stopPropagation();
          props.handleCity(event.target.value);
        }}
        onKeyDown={searchLocation}
      />
      <button type="button" className="search-btn" onClick={props.getData}>
        <img src={searchIcon} />
      </button>
    </div>
  );
};
export default Search;
