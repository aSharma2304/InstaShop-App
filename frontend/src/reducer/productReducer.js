const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
        products: action.payload,
      };
    case "MY_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "SET_SHOP_LOADING":
      return {
        ...state,
        isShopsLoading: true,
      };

    case "SET_SHOPS":
      return {
        ...state,
        shopsData: action.payload,
        isShopsLoading: false,
      };

    case "SHOP_ERROR":
      return {
        ...state,
        isShopsLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default ProductReducer;
