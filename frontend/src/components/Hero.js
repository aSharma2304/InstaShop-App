import React from "react";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl  text-white font-bold">
            Welcome to InstaShop
          </h1>
          <p className="mb-5">
            "Welcome to InstaShop, where sellers thrive! Set up your shop
            effortlessly and showcase your products to the world. Start selling
            today and unlock your online business potential."
          </p>
          <NavLink to="/shops">
            <button className="btn btn-primary">Explore shops</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
