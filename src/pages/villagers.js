import React, { useEffect, useState } from "react";
import VillagerCard from "../components/cards/villagercard";
import { Layout } from "../components/layout/layout";
import { CardLoader } from "../components/loader/cardloader";
import SearchBar from "../components/nav/searchbar";
import MeiliSearch from "meilisearch";

const Error = ({ errorMessage }) => (
  <div className="flex flex-wrap justify-center flex-1 w-1/4 h-10 mt-5 bg-red-600">
    <h1 className="text-xl text-white">Error loading data</h1>
    <h1 className="text-xl text-white">{errorMessage.toString()}</h1>
  </div>
);

const Loading = () => (
  <div className="flex flex-wrap justify-center w-full lg:w-5/6">
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </div>
);

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/",
});

const index = client.getIndex("villagers");

const Villagers = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(25);
  const [searchedWord, setSearchedWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function searchWithMeili() {
      const search = await index.search(searchedWord);
      setSearchResults(search.hits);
    }

    if (searchedWord) {
      searchWithMeili();
    }
  }, [searchedWord]);

  useEffect(() => {
    (async () => {
      await fetch(`${process.env.GATSBY_API_URL}/villagers?limit=${limit}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err));
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setSearchData(searchResults);
  }, [searchResults]);

  if (error) {
    return <Error errorMessage={error} />;
  } else if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (searchData.length > 0) {
    return (
      <Layout
        searchBar={
          <SearchBar setSearchedWord={setSearchedWord} searchResults={searchResults} />
        }
      >
        <div className="flex flex-wrap justify-center w-full lg:w-5/6">
          {searchData &&
            searchData.map((asset) => <VillagerCard key={asset._id} asset={asset} />)}
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      searchBar={
        <SearchBar setSearchedWord={setSearchedWord} searchResults={searchResults} />
      }
    >
      <div className="flex flex-wrap justify-center w-full lg:w-5/6">
        {data && data.map((asset) => <VillagerCard key={asset._id} asset={asset} />)}
      </div>
    </Layout>
  );
};

export default Villagers;
