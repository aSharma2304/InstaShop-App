import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, review }) => {
  const returnStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar></FaStar>
        ) : stars > number ? (
          <FaStarHalf></FaStarHalf>
        ) : (
          <AiOutlineStar></AiOutlineStar>
        )}
      </span>
    );
  });

  return <p className="flex">{returnStars}</p>;
};

export default Stars;
