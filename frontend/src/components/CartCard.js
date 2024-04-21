import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { cartContext } from "../context/cart-context";

const CartCard = (props) => {
  const { removeItem } = useContext(cartContext);
  const { cartid, cartName, price, amount } = props.cartItem;
  return (
    <div className="card w-[1000px] flex-shrink bg-primary-content text-primary-content flex flex-row justify-between ">
      <div className="card-body flex flex-row justify-around text-white">
        <h2 className="card-title productname flex justify-center">
          {cartName}
        </h2>
        <p className="amount flex justify-center">Quantity: {amount}</p>
        <p className="priceofitem flex justify-center">
          Price: $ {price * amount}
        </p>
      </div>
      <div className="card-actions mt-5 mr-2 flex flex-row justify-between">
        <button className="btn btn-accent">Buy Now</button>
        <button
          className="btn btn-square btn-error"
          onClick={() => {
            removeItem(cartid);
          }}
        >
          <AiOutlineDelete size={23}></AiOutlineDelete>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
