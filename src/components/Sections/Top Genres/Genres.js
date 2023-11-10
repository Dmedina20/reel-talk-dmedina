import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import genreData from "../../../data/genres.json";
import GenreButton from "../../GenreSelect/GenreButton";

const Genres = () => {
  const [itemsToShow, setItemsToShow] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [filteredGenres, setFilteredGenres] = useState([]);

  const showMoreButtonVisible =
    filteredGenres.length === 0 && itemsToShow < genreData.length;

  const handleShowMore = () => {
    // Increase the number of items to show
    setItemsToShow(itemsToShow + 20);
  };

  // Update filtered genres when search input changes
  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    // Filter genres based on the input
    const filtered = genreData.filter((genre) =>
      genre.name.toLowerCase().includes(inputValue)
    );

    setFilteredGenres(filtered);
  };

  return (
    <>
      <div className="w-screen h-screen px-[272px] bg-neutral-800 justify-center items-center inline-flex">
        <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
          {/* Progress Bar */}
          <div className="w-11/12 lg:w-2/6 mx-auto">
            <div className="bg-neutral-500 h-1 flex items-center justify-between">
              {/* Progress Section */}
              <div className="w-1/3 bg-reelOrange h-1 flex items-center">
                <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center"></div>
              </div>

              <div className="w-1/3 flex justify-between bg-reelOrange h-1 items-center relative">
                <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                  <div className="h-3 w-3 bg-reelOrange rounded-full" />
                </div>
                <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                  <div className="h-3 w-3 bg-white rounded-full" />{" "}
                </div>
              </div>

              <div className="w-1/3 flex justify-end">
                <div className="bg-neutral-500 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                  <div className="h-3 w-3 bg-neutral-500 rounded-full" />{" "}
                </div>
              </div>
              {/* Progress Section */}
            </div>
          </div>
          {/* Progress Bar End */}
          <div className="self-stretch h-[126px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch text-center text-white text-opacity-90 text-[28px] font-medium font-['Avenir Next']">
              Select your top 5 genres for movies and TV
            </div>
            <input
              value={searchInput}
              onChange={handleInputChange}
              placeholder="Search"
              className=" text-white text-opacity-90 text-base font-normal font-['Avenir Next'] tracking-tight w-[544px] h-14 px-6 py-1.5 bg-white bg-opacity-5 rounded-lg justify-start items-center gap-2.5 inline-flex"
            />
          </div>
          <div className="flex-col justify-center items-center gap-6 flex">
            <div className="justify-start grid grid-cols-5 items-start gap-6 inline-flex">
              {filteredGenres.length > 0
                ? filteredGenres.map((genre) => (
                    <GenreButton
                      key={genre.name}
                      emoji={genre.emoji}
                      name={genre.name}
                    />
                  ))
                : genreData
                    .slice(0, itemsToShow)
                    .map((genre) => (
                      <GenreButton
                        key={genre.name}
                        emoji={genre.emoji}
                        name={genre.name}
                      />
                    ))}
            </div>
            {showMoreButtonVisible && (
              <div className="justify-center items-center gap-1 inline-flex">
                <button
                  onClick={handleShowMore}
                  className="cursor-pointer text-center text-white text-opacity-60 text-base font-semibold font-['Avenir Next'] tracking-tight"
                >
                  Show more
                </button>
              </div>
            )}
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="justify-start items-start flex">
              <Link to="/birth">
                <button className="hover:bg-reelRed w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                    Back
                  </div>
                </button>
              </Link>
            </div>
            <div className="justify-start items-start flex">
              <Link to="/movies">
                <button className="w-64 h-12 p-2.5 bg-reelOrange rounded-lg justify-center items-center gap-2.5 flex">
                  <div
                    className="text-center text-black text-opacity-90 
                     text-base font-semibold font-['Avenir Next'] tracking-tight"
                  >
                    Next
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genres;
