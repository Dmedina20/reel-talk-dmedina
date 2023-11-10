import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { logout } from "../../firebase/userSlice";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAvi, setIsOpenAvi] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleAviMenu = () => {
    setIsOpenAvi(!isOpenAvi);
  };

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="w-full py-2 bg-white border-b border-neutral-500 border-opacity-50 flex justify-between items-center">
      <div className="px-4 lg:py-3 bg-white rounded flex items-center gap-4">
        <div className="w-[118px] relative">
          <Link to="/">
            <img
              className="lg:w-6 lg:h-[26px] w-8 h-8 mt-2 lg:mt-0 left-0 top-0 lg:absolute"
              src={logo}
              alt="reel-talk-logo"
            />
            <div className="hidden lg:block left-[10px] top-[1.10px] relative text-center text-neutral-800 text-[17px] font-bold font-['Avenir Next'] tracking-tight">
              REEL TALK
            </div>
          </Link>
        </div>
        <Link to="/">
          <li className="hidden lg:block text-neutral-800 text-base font-normal font-['Avenir Next'] tracking-tight">
            Browse
          </li>
        </Link>
        <Link to="/">
          <li className="hidden lg:block text-neutral-800 text-base font-normal font-['Avenir Next'] tracking-tight">
            Community
          </li>
        </Link>
        <Link to="/">
          <li className="hidden lg:block text-neutral-800 text-base font-normal font-['Avenir Next'] tracking-tight">
            Discussions
          </li>
        </Link>
      </div>

      <div className="hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-2 ml-1 absolute search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          placeholder="Search"
          className="w-[700px] h-[34px] px-6 py-1.5 bg-black bg-opacity-10 rounded-lg flex items-center text-left gap-2.5"
        />
      </div>

      <div className="flex items-center mr-4 gap-4 ">
        {user && (
          <div
            className="relative right-10 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full bg-gray-500 cursor-pointer"
            onClick={toggleAviMenu}
          >
            <span className="font-medium text-gray-300">
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </span>
          </div>
        )}

        {isOpenAvi && user && (
          <div className="fixed w-[200px] right-8 top-10 mt-7 bg-white border border-neutral-500">
            <ul className="py-1">
              {/* Dropdown menu items */}
              <li>
                <button className="block px-4 py-2 text-neutral-800 hover:bg-gray-100">
                  Profile
                </button>
              </li>
              <li>
                <Link to="/">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-reelRed hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {!user && (
          <div className="hidden lg:block px-4 py-1.5 rounded border border-neutral-800 flex items-center gap-2.5">
            <Link to="/login">
              <button className="text-neutral-800 text-base font-semibold font-['Avenir Next'] tracking-tight">
                Login
              </button>
            </Link>
          </div>
        )}
        {!user && (
          <div className="hidden lg:block px-4 py-1.5 bg-amber-400 rounded flex items-center gap-2.5">
            <Link to="/signup">
              <button className="text-neutral-800 text-base font-semibold font-['Avenir Next'] tracking-tight">
                Signup
              </button>
            </Link>
          </div>
        )}
        {!user && (
          <div className="block lg:hidden px-4 py-1.5 bg-amber-400 rounded flex items-center gap-2.5">
            <button className="text-neutral-800 text-base font-semibold font-['Avenir Next'] tracking-tight">
              Get started
            </button>
          </div>
        )}

        <div className="lg:hidden relative">
          <button className="text-black p-2" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 overflow-y-hidden bg-white pt-4 mt-2 p-10 z-10 w-screen">
              <ul className="block text-black">
                <li className="mb-2">
                  <Link to="/">Browse</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Community</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Discussions</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
