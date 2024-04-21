import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./product-context";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  sortingValue: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTERED_PRODUCTS", payload: products });
  }, [products]);

  const sorting = () => {
    dispatch({ type: "GET_SORTED_PRODUCTS" });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sortingValue]);

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
