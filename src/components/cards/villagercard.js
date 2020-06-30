import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";

const VillagerCard = ({ asset }) => {
  const [selectedVillager, setSelectedVillager] = useState("");

  const {
    name,
    gender,
    personality,
    hobby,
    favoriteSong,
    species,
    // houseImage,
    // iconImage,
    allVillagerHouseImage: {
      childImageSharp: {
        fixed: houseImage,
        // fixed: { src: houseImageSrc },
      },
    },
    allVillagerIconImage: {
      childImageSharp: {
        fixed: iconImage,
        // fixed: { src: iconImageSrc },
      },
    },
  } = asset;

  // if (
  //   !asset &&
  //   !name &&
  //   !gender &&
  //   !personality &&
  //   !hobby &&
  //   !favoriteSong &&
  //   !species &&
  //   !asset.allVillagerHouseImage &&
  //   !asset.allVillagerIconImage
  // ) {
  //   return <h1>Error loading data</h1>;
  // }

  return (
    <>
      <div
        style={{ backgroundColor: "#ffebee" }}
        className="w-full max-w-md mb-3 bg-white rounded-lg shadow-xl lg:m-3 lg:w-auto xl:w-1/3"
      >
        <div className="flex justify-center overflow-hidden rounded-lg shadow-xl">
          <Img fixed={houseImage} />
          {/* <ImgProxy width={400} height={400} url={houseImage} /> */}
        </div>
        <div className="p-4">
          <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
            {name} • {species}
          </p>
          <div className="text-gray-900 list-disc">
            <ul>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Personality:</strong> {personality}
              </li>
              <li>
                <strong>Hobby:</strong> {hobby}
              </li>
              <li>
                <strong>Favorite Song:</strong> {favoriteSong}
              </li>
            </ul>
          </div>
        </div>
        <div
          onMouseEnter={() => setSelectedVillager(name)}
          onMouseLeave={() => setSelectedVillager("")}
          className="px-4 pt-3 pb-4 transition ease-in-out bg-gray-100 border-t border-gray-300 rounded-lg shadow-xl hover:bg-gray-200"
        >
          <div className="text-xs font-bold tracking-wide text-gray-600 uppercase">
            Villager
          </div>
          <div className="flex items-center pt-2">
            <div className="w-16 h-16 mr-3 bg-center bg-cover rounded-full">
              <Link to={`/villager/${selectedVillager}`}>
                <Img fixed={iconImage} />
                {/* <ImgProxy url={iconImage} /> */}
              </Link>
            </div>
            <div>
              <p className="font-bold text-gray-900">{name}</p>
              <p className="text-sm text-gray-700">(555) 555-4321</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VillagerCard;
