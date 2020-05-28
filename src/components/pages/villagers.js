import React, { useEffect, useState } from "react";
import VillagerCard3 from "../cards/villagercard3";
import Loader from "../loader/loader";

const Error = () => (
  <div className="flex flex-wrap justify-center w-full mt-5 ml-10 md:w-4/5 md:justify-start">
    <h1 className="text-white">Error loading data</h1>
  </div>
);

const Loading = () => (
  <div className="flex flex-wrap justify-center w-full mt-5 text-white md:w-4/5 md:justify-center">
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </div>
);

const VillagersPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetch(
        `http://${process.env.GATSBY_API_URL}:${process.env.GATSBY_API_PORT}/villagers`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
      setLoading(false);
    })();
  }, []);

  if (!data) {
    return <Error />;
  } else if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap justify-center w-full mt-5 lg:w-5/6">
      {data.map((asset) => (
        <VillagerCard3 key={asset._id} asset={asset} />
      ))}
    </div>
  );
};

export default VillagersPage;
