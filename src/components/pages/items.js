import React, { useEffect, useState } from "react";
import ItemCard from "../cards/itemcard";

const ItemsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/items?limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full mt-5 md:w-4/5 md:justify-start">
      {data.map((asset) => (
        <ItemCard key={asset._id} asset={asset} />
      ))}
    </div>
  );
};

export default ItemsPage;
