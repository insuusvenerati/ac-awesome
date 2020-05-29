import React, { useEffect, useState } from "react";
import VillagerCard from "../cards/villagercard";
import { CardLoader } from "../loader/cardloader";

const Error = () => (
  <div className="flex flex-wrap justify-center w-full mt-5 ml-10 md:w-4/5 md:justify-start">
    <h1 className="text-white">Error loading data</h1>
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

const VillagersPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetch(
        `${process.env.GATSBY_API_URL}${
          process.env.GATSBY_API_PORT ? ":1337" : ""
        }/villagers`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
      // setLoading(false);
    })();
  }, []);

  if (!data) {
    return <Error />;
  } else if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap justify-center w-full lg:w-5/6">
      {data.map((asset) => (
        <VillagerCard key={asset._id} asset={asset} />
      ))}
    </div>
  );
};

export default VillagersPage;
