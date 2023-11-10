import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebase";
import { logout } from "../../../firebase/userSlice";
import { signOut } from "firebase/auth";
const End = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-800">
        <Link to="/">
          <button
            onClick={handleLogout}
            className="px-4 py-2 hover:bg-reelRed bg-transparent border-2 border-white border-opacity-90  text-white text-opacity-90 rounded-md hover:bg-reelOrange-dark transition"
          >
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default End;
