import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/product-context";
import { cartContext } from "../context/cart-context";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";
import Stars from "../components/Stars";
import { NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const API = "http://localhost:8000/products";

export const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useContext(AppContext);

  const { addToCart } = useContext(cartContext);

  const { id } = useParams();
  const { name, image, price, description, company, reviews, stars, stock } =
    singleProduct;
  // const firstImage = image[0]["url"];
  const [amount, setAmount] = useState(1);

  function setDecrement() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  function setIncrement() {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  useEffect(() => {
    console.log(id);
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img
            src={image.url}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="image of product"
          /> */}
          {image && image.url && (
            <img
              src={image.url}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="image of product"
            />
          )}
          <div className="ml-16">
            <h1 className="text-5xl font-bold">{name}</h1>
            <h3 className="text-xl font-semibold mt-2">{company}</h3>
            <p className="py-6">{description}</p>

            <Stars stars={stars} reviews={reviews}></Stars>
            <p className="py-1"> reviews: {reviews} </p>
            <p className="py-1">Rating: {stars}</p>

            {stock > 0 ? (
              <div className="badge badge-accent">In Stock</div>
            ) : (
              <div className="badge badge-error">Out of Stock</div>
            )}
            <div className="flex justify-between w-[150px] m-2">
              <button onClick={setDecrement}>
                <AiOutlineMinusCircle className="size-9"></AiOutlineMinusCircle>
              </button>
              <h3 className="text-xl font-bold ">{amount}</h3>
              <button onClick={setIncrement}>
                <AiOutlinePlusCircle className="size-9"></AiOutlinePlusCircle>
              </button>
            </div>

            <button className="btn btn-primary">Buy now at ${price}</button>
            <NavLink
              to={"/cart"}
              onClick={() => {
                addToCart(id, name, price, amount, singleProduct);
              }}
            >
              <button className="btn btn-outline ml-2 btn-accent">
                add to cart
              </button>
            </NavLink>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
