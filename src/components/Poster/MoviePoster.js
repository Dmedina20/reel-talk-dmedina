import React, { useState } from "react";
import "../../App.css";

function Poster({ image, name, date }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonStyle = {
    borderColor: isClicked ? "#FFA724" : "transparent",
    borderWidth: "3px",
  };
  return (
    <>
      <button onClick={handleClick}>
        <img
          alt="movie poster"
          style={buttonStyle}
          className="mx-auto w-[104.40px] h-[141.60px] "
          src={image}
        />
        <p className="text-center text-neutral-300">{name}</p>
        <p className="text-center text-neutral-300">{date}</p>
      </button>
    </>
  );
}

export default Poster;
