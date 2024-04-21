import React from "react";
import { NavLink } from "react-router-dom";

export const Shop = (props) => {
  return (
    <div className="card w-96 bg-primary-content -400-100 shadow-xl image-full p-3">
      <figure>
        <img src={props.details.Image} alt="Shop Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.details.Shopname}</h2>
        <p>{props.details.Description}</p>
        <p>By - {props.details.Owner}</p>
        <div className="card-actions justify-end">
          <NavLink to={"#"}>
            <button className="btn btn-primary">Explore</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
