import React from "react";
import { useFilterContext } from "../context/filter-context";

const Select = () => {
  const { filterProducts, sorting } = useFilterContext();

  return (
    <select
      id="sort"
      className="select select-secondary w-full max-w-xs"
      onClick={sorting}
    >
      <option disabled selected value="nil">
        Sort By
      </option>
      <option value={"lowest"}>Price(lowest)</option>
      <option value={"highest"}>Price(highest)</option>
      {/* <option></option>
      <option>C#</option> */}
    </select>
  );
};

export default Select;
