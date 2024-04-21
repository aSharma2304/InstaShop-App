import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cart-context";
import CartCard from "../components/CartCard";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, items, cartTotal } = useContext(cartContext);
  console.log(`this is the cart page gettin cart values ${cart.length} `);

  if (cart.length === 0) {
    return (
      <div>
        <div className="font-poppins text-3xl mt-3 ml-3 text-center">
          Cart is currently empty !
        </div>
        <br></br>
        <NavLink to="/shops" className="flex justify-center">
          <button className="font-poppins hover:underline">Shop now</button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="flex  justify-around mt-5">
        <p className="font-bold">Cart Total : {items}</p>
        <p className="font-bold">Cart price : {cartTotal}</p>
        <button
          className="btn  btn-secondary rounded-3xl font-semibold"
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
      <div className=" my-10 flex flex-col ml-80 gap-5">
        {cart.map((item, index) => {
          return <CartCard key={index} cartItem={item}></CartCard>;
        })}
      </div>
    </>
  );
};
