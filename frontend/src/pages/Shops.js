import React, { useContext } from "react";
import { AppContext } from "../context/product-context";
import { Shop } from "../components/Shop";
import { NavLink } from "react-router-dom";

export const Shops = () => {
  const { shopsData } = useContext(AppContext);
  console.log(shopsData);

  return (
    <>
      <div className="font-poppins text-3xl mt-3 ml-3">Explore all Shops </div>
      <div className=" ml-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {shopsData.map((ele, index) => {
          console.log(ele.shopid);
          return (
            <NavLink to={`/${ele.Shopname}/${ele.shopid}`}>
              <Shop key={index} details={ele}></Shop>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
