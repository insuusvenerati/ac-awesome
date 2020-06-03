import React from "react";
import { Filter, Search } from "../icons/svg";
import { LimitDropdown } from "../layout/limitdropdown";

// const client = new MeiliSearch({
//   host: "http://127.0.0.1:7700/",
// });

// const index = client.getIndex("villagers");

const SearchBar = ({ searchedWord, setSearchedWord }) => {
  // const [searchedWord, setSearchedWord] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   async function searchWithMeili() {
  //     const search = await index.search(searchedWord);
  //     setSearchResults(search.hits);
  //   }

  //   if (searchedWord) {
  //     searchWithMeili();
  //   }
  // }, [searchedWord]);

  // if (searchResults.length > 0) {
  //   return (
  //     <>
  //       <div className="sticky top-0 z-10 flex justify-end w-full p-2 bg-teal-400 shadow-md">
  //         <LimitDropdown />
  //         <div className="w-1/5 shadow-sm">
  //           <div className="flex">
  //             <span className="px-4 py-2 whitespace-no-wrap bg-gray-300 border border-2 rounded-l">
  //               <Filter />
  //             </span>
  //             <input
  //               className="w-full px-4 py-2 border border-2"
  //               type="text"
  //               placeholder="Search..."
  //               value={searchedWord}
  //               onChange={(e) => setSearchedWord(e.target.value)}
  //             />
  //             <span className="px-4 py-2 whitespace-no-wrap bg-gray-300 border border-2 rounded-r">
  //               <Search />
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="sticky top-0 z-10 flex justify-end w-full p-2 bg-teal-400 shadow-md">
        <LimitDropdown />
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
    </>
  );
};

export default SearchBar;
