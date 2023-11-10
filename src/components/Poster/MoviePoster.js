import React from "react";
import "../../App.css";

function Card({ image, name }) {
  return (
    <>
      <img alt="movie poster" className="w-[72px] h-[109.03px]" src={image} />
    </>
  );
}

export default Card;
