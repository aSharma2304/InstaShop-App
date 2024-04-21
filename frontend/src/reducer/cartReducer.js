const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_TO_CART":
      let { id, name, price, amount, singleProduct } = action.payload;
      console.log(`cart got product ${singleProduct.name}`);

      let cartProduct = {
        cartid: Math.round(Date.now() / 1000),
        cartName: name,
        price: price,
        amount: amount,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
        cartTotal: state.cartTotal + cartProduct.price,
        items: state.items + 1,
      };

    case "REMOVE_CART_ITEM":
      let priceToRemove = state.cart.filter(
        (ele) => ele.cartid === action.payload
      )[0].price;
      let updatedCart = state.cart.filter(
        (ele) => ele.cartid !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
        items: state.items - 1,
        cartTotal: state.cartTotal - parseFloat(priceToRemove),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        items: 0,
        cartTotal: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;
