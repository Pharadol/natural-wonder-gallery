function Search(props) {
  const { value, onValueChange } = props;
  return (
    <div className="container mx-auto px-3 md:px-0 flex justify-center">
      <input
        placeholder="search here"
        type="text"
        className=" w-full !px-2 md:px-0 mx-auto border-2 h-8"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
