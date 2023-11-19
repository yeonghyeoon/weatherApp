import "./Search.css";
import searchIcon from "../../assets/icons/search.svg"

const Search = (props) => {

  const searchLocation = (e) => {
    if(e.key === 'Enter') {
      props.getData();
    }
    return;
  }

  return (
    <div className="form-search">
      <input 
        className="input-location"
        placeholder="Search Location"
        onChange={(event) => {
          props.handleCity(event.target.value);
        }}
        onKeyDown={searchLocation}
      />
      <button type="button" className="search-btn" onClick={props.getData}><img src={searchIcon} /></button>
    </div>
  );
};
export default Search;
