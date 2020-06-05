import React from "react";
import { Filter, Search } from "../icons/svg";
import { LimitDropdown } from "../layout/limitdropdown";

const SearchBar = ({ searchedWord, setSearchedWord }) => {
  return (
    <>
      <div className="sticky top-0 z-10 flex justify-center w-full p-2 bg-teal-400 shadow-md lg:justify-end">
        {/* <LimitDropdown /> */}
        <div className="w-full shadow-sm lg:w-1/5">
          <div className="flex">
            <span className="px-4 py-2 whitespace-no-wrap bg-gray-300 border border-2 rounded-l">
              <Filter />
            </span>
            <input
              className="w-full px-4 py-2 border border-2"
              type="text"
              placeholder="Search..."
              value={searchedWord}
              onChange={(e) => setSearchedWord(e.target.value)}
            />
            <span className="px-4 py-2 whitespace-no-wrap bg-gray-300 border border-2 rounded-r">
              <Search />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
