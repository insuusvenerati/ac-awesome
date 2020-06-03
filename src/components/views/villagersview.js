import React, { useEffect, useState } from "react";
import VillagerCard from "../cards/villagercard";
import { CardLoader } from "../loader/cardloader";
import SearchBar from "../nav/searchbar";

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

const VillagersView = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    (async () => {
      await fetch(`${process.env.GATSBY_API_URL}/villagers?limit=${limit}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err));
      setLoading(false);
    })();
  }, []);

  if (error) {
    return <Error errorMessage={error} />;
  } else if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center w-full lg:w-5/6">
        {data.map((asset) => (
          <VillagerCard key={asset._id} asset={asset} />
        ))}
      </div>
    </>
  );
};

export default VillagersView;
