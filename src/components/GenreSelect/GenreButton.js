import React, { useState } from "react";
import "../../App.css";

function GenreButton({ emoji, name }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? "#FFA724" : "white",
    borderColor: "#FFA724",
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={buttonStyle}
        className="w-40 h-[46px] p-3 bg-white rounded-lg border-2 border-neutral-500 justify-start items-center gap-2.5 flex"
      >
        <div className="grow shrink basis-0 text-neutral-800 text-sm font-semibold font-['Avenir Next'] tracking-tight">
          {emoji} {name}
        </div>
        <div className="w-5 h-5 relative">
          <div className="checkbox w-5 h-5 bg-white left-0 top-0 absolute rounded border border-neutral-800">
            {isClicked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="checkbox w-5 h-5 bg-white left-0 top-0 absolute rounded border border-neutral-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
      </button>
    </>
  );
}

export default GenreButton;
