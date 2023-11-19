import "./Search.css";
import searchIcon from "../../assets/icons/search.svg"

const Search = (props) => {
  return (
    <form className="form-search">
      <input 
        className="input-location"
        placeholder="Search Location"
        onChange={(event) => {
          props.handleCity(event.target.value);
        }}
        // onKeyDown={props.getData}
      />
      <button type="button" className="search-btn" onClick={props.getData}><img src={searchIcon} /></button>
    </form>
  );
};
export default Search;
