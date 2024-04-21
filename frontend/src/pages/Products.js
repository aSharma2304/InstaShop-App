import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/product-context";
import Loading from "../components/Loading";
import { Product } from "../components/Product";
import { useFilterContext } from "../context/filter-context";
import Select from "../components/Select";
import { useParams } from "react-router-dom";

const API = "http://localhost:8000/shops/";
export const Products = () => {
  const { shopid, shopname } = useParams();

  const { filterProducts } = useFilterContext();

  console.log(filterProducts);

  const { isLoading, products, getProducts, isError } = useContext(AppContext);
  console.log(shopid);

  useEffect(() => {
    getProducts(`${API}${parseInt(shopid)}`);
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return (
      <div className="font-poppins text-3xl mt-3 ml-3">
        Sorry , No products to show at this moment ...{" "}
      </div>
    );
  }

  return (
    <>
      <div className="font-poppins text-3xl mt-3 ml-3">
        Products Listed from {shopname}
      </div>

      <div className="parent grid grid-cols-11 ml-3">
        <div className="filtering col-span-2 mt-7">
          <Select></Select>
        </div>

        <div className="products col-span-9  p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {filterProducts?.map((product) => {
            return <Product key={product.id} {...product}></Product>;
          })}
        </div>
      </div>
    </>
  );
};
