// first we make a context
// then we wrap our app with the provider so that every page and component gets access to that context
// use hook useContext to handle the consumer part

import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const API_SHOPS = "http://localhost:8000/";

//in the children we pass the component that can get the data
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {},
  shopsData: [],
  isShopsLoading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getProducts(url) {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products[0]);
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      const newProducts = [];
      dispatch({ type: "API_ERROR", payload: newProducts });
    }
  }

  async function getShops(url) {
    dispatch({ type: "SET_SHOP_LOADING" });
    try {
      const res = await axios.get(url);
      const shops = await res.data;
      console.log(shops[0]);
      dispatch({ type: "SET_SHOPS", payload: shops });
    } catch (error) {
      dispatch({ type: "SHOP_ERROR" });
    }
  }

  //api call for single product page
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    // getProducts(API);
    getShops(API_SHOPS);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, getSingleProduct, getShops, getProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
