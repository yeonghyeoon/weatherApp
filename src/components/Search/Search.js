const Search = (props) => {
  return (
    <form>
      <input
        placeholder=""
        // value={props.searchValue}
        onChange={(event) => {
          props.handleCity(event.target.value);
        }}
      />
      <button type="button" onClick={props.getData}></button>
    </form>
  );
};
export default Search;
