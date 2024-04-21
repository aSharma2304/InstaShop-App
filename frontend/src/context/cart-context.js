import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { SingleProduct } from "../pages/SingleProduct";
const cartContext = createContext();

const getLocalStorageData = () => {
  let newCartData = localStorage.getItem("InstaShopCart");
  if (newCartData.length === 0) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};
const initialState = {
  cart: getLocalStorageData(),
  items: 0,
  cartTotal: 0,
  shippingFee: 50,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, name, price, amount, singleProduct) => {
    dispatch({
      type: "SET_TO_CART",
      payload: { id, name, price, amount, singleProduct },
    });
  };

  const removeItem = (itemid) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: itemid });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("InstaShopCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };
