import React from "react";

const Search = ({ setSearchText }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search color"
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
};
export default Search;
