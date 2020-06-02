import React, { useState, useEffect } from "react";
import BG from "../../images/bg.jpg";
import { Filter, Search } from "../icons/svg";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";
import MeiliSearch from "meilisearch";

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/",
});

const index = client.getIndex("villagers");

export const Layout = ({ children, sidebar = true }) => {
  const [searchedWord, setSearchedWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function searchWithMeili() {
      const search = await index.search(searchedWord);
      setSearchResults(search.hits);
    }

    searchWithMeili();
  }, [searchedWord]);

  return (
    <>
      <Nav />
      <div className="sticky top-0 z-10 flex justify-end w-full p-2 bg-teal-400 shadow-md">
        <div className="w-1/5 shadow-sm">
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
      <div
        style={{ backgroundImage: `url(${BG})` }}
        className="flex flex-wrap p-3 bg-fixed bg-right bg-no-repeat lg:p-5"
      >
        <div className="fixed bottom-0 right-0 flex flex-col p-3">
          <div>
            <p className="mr-5 text-white">BG by</p>
            <p className="mb-1 mr-5 text-white">
              <a href="https://www.instagram.com/geographyofrobots/">
                @geographyofrobots
              </a>
            </p>
          </div>
          <div>
            <p className="mr-5 text-white">Loader by</p>
            <p className="mr-5 text-white">
              <a href="https://www.loading.io">loading.io</a>
            </p>
          </div>
        </div>
        {children}
        <RightSidebar sidebar={sidebar} />
      </div>
    </>
  );
};
