import React from "react";
import ImgProxy from "../imgproxy/imgproxy";

const ItemCard = ({ asset }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#ffebee" }}
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease"
        className="w-full max-w-sm mb-3 bg-white rounded-lg md:max-w-full lg:max-w-sm lg:m-3"
      >
        <div className="flex justify-center overflow-auto rounded-lg shadow-xl">
          {asset.variants.map((image) => (
            <a href={image.image}>
              <ImgProxy height={128} width={128} url={image.image} />
            </a>
          ))}

          {/* <ImgProxy height={64} width={64} url={asset.variants[0].image} /> */}
          {/* {console.log(JSON.stringify(asset, null, 2))} */}
        </div>
        <div className="p-4">
          <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
            {asset.name} • {asset.sourceSheet}
          </p>
          <div className="text-gray-900 list-disc">
            <ul>
              <li>
                <strong>Gender:</strong> {asset.diy}
              </li>
              <li>
                <strong>Personality:</strong> {asset.size}
              </li>
              <li>
                <strong>Hobby:</strong> {asset.catalog}
              </li>
              <li>
                <strong>Favorite Song:</strong> {asset.interact}
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 bg-gray-100 border-t border-gray-300 rounded-lg shadow-xl">
          <div className="text-xs font-bold tracking-wide text-gray-600 uppercase">
            Realtor
          </div>
          <div className="flex items-center pt-2">
            <div className="w-16 h-16 mr-3 bg-center bg-cover rounded-full">
              <ImgProxy height={64} width={64} url={asset.variants[0].image} />
            </div>
            <div>
              <p className="font-bold text-gray-900"> {asset.name} </p>
              <p className="text-sm text-gray-700">(555) 555-4321</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
