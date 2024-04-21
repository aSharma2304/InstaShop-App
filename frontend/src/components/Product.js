import React from "react";
import { NavLink } from "react-router-dom";

export const Product = (product) => {
  const { id, name, image, price, description } = product;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card card-compact w-96 bg-primary-content  m-4 transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl">
        <figure className="overflow-hidden">
          <img
            src={image.url}
            alt={`image of ${name}`}
            className="w-full object-cover h-[350px] "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.split(",")[0]}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now at ${price}</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
