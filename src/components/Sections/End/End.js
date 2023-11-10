import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const End = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-800">
        <p className="text-white text-opacity-90 text-4xl font-medium mb-8">
          🎉You have reached the end of the demo!🎉
        </p>
        <Link to="/">
          <button className="px-4 py-2 bg-reelOrange text-white text-opacity-90 rounded-md hover:bg-reelOrange-dark transition">
            Go back to the start
          </button>
        </Link>
      </div>
    </>
  );
};

export default End;
