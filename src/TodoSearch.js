import React from "react";
import "./TodoSearch.css";

function TodoSearch({
  searchValue,
  SetSearchValue,
}) {

  return (
    <input
      placeholder="Cortar Cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        SetSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
