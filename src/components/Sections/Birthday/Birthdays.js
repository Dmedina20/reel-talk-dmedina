import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase";
import { logout } from "../../../firebase/userSlice";
import { signOut } from "firebase/auth";
import movieData from "../../../data/movies.json";
import MoviePoster from "../../Poster/MoviePoster";

const Birthdays = () => {
  const [birthdate, setBirthdate] = useState("");
  const [itemsToShow] = useState(6);
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    signOut(auth);
  };

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  return (
    <>
      <div className="w-screen h-screen px-[434px] pb-0.5 bg-neutral-800 justify-center items-center inline-flex">
        <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
          {/* Progress Bar */}
          <div className="w-11/12 lg:w-2/6 mx-auto">
            <div className="bg-neutral-500 h-1 flex items-center justify-between">
              {/* Progress Section */}
              <div className="w-1/3 bg-reelOrange h-1 flex items-center">
                <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center"></div>
              </div>

              <div className="w-1/3 flex justify-between bg-neutral-500 h-1 items-center relative">
                <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                  <div className="h-3 w-3 bg-white rounded-full" />
                </div>
                <div className="bg-neutral-500 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                  <div className="h-3 w-3 bg-neutral-500 rounded-full" />{" "}
                </div>
              </div>

              <div className="w-1/3 flex justify-end">
                <div className="bg-neutral-500 h-6 w-6 rounded-full shadow" />
              </div>
              {/* Progress Section */}
            </div>
          </div>
          {/* Progress Bar End */}
          <div className="flex-col justify-start items-center gap-10 flex">
            <div className="h-[210px] flex-col justify-start items-center gap-8 flex">
              <div className="h-[130px] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-[572px] text-center text-white text-opacity-90 text-[28px] font-medium font-['Avenir Next']">
                  Welcome{" "}
                  <span className="font-semibold text-reelOrange">
                    {user.username}
                  </span>
                  ! Mind sharing your birthdate?
                </div>
                <div className="w-[504px] text-center text-white text-opacity-90 text-base font-normal font-['Avenir Next'] tracking-tight">
                  To personalize your content recommendations and to ensure it’s
                  all age-appropriate, could you kindly share your date of birth
                  with us?
                </div>
              </div>
              <input
                value={birthdate}
                onChange={handleInputChange}
                placeholder="MM/DD/YYYY"
                type="date"
                className="cursor-pointer uppercase text-white w-80 h-12 pl-6 pr-3 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
              />
            </div>
            <div className="p-6 bg-white bg-opacity-5 rounded-lg flex-col justify-start items-center gap-3 flex">
              <div className="h-[30px] px-[88px] py-[49px] justify-start items-center gap-2.5 inline-flex">
                <div className="w-[307px] text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                  We love our birthday movies 🎉
                </div>
              </div>
              <div className="w-[488px] px-1 py-2 justify-start items-start gap-3 inline-flex">
                {movieData.slice(0, itemsToShow).map((movie) => (
                  <MoviePoster
                    key={movie.poster}
                    image={movie.image}
                    ingredients={movie.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-8 inline-flex">
            <div className="justify-start items-start flex">
              <Link to="/create">
                <button
                  onClick={handleLogout}
                  className="hover:bg-reelRed w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex"
                >
                  <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                    Back
                  </div>
                </button>
              </Link>
            </div>
            <div className="justify-start items-start flex">
              <button
                className={`w-64 h-12 p-2.5 ${
                  birthdate
                    ? "bg-reelOrange "
                    : "bg-neutral-500 cursor-not-allowed"
                } rounded-lg justify-center items-center gap-2.5 flex`}
              >
                <div
                  className={`text-center text-black ${
                    birthdate ? "text-opacity-90" : "text-opacity-40"
                  } text-base font-semibold font-['Avenir Next'] tracking-tight`}
                >
                  Next
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Birthdays;
