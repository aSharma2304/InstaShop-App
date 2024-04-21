import React from "react";
import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <div className="font-poppins text-3xl mt-3 ml-3 text-center">
        Oh no! Looks like the page you are looking for does not exist
      </div>
      <br></br>
      <NavLink to="/" className="flex justify-center">
        <button className="font-poppins hover:underline">
          return to home page
        </button>
      </NavLink>
    </div>
  );
};
