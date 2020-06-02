// import React from "react";

// const ItemCard = ({ asset }) => {
//   return (
//     <div className="card">
//       <div
//         style={{
//           background: asset.variants[0].colors[0],
//         }}
//         className="additional"
//       >
//         <div className="user-card">
//           <div className="level center">Level 13</div>
//           <div className="points center">5,312 Points</div>
//           <img className="center" src={asset.variants[0].image} alt={asset.name} />
//         </div>
//         <div className="more-info">
//           <h1> {asset.name} </h1>
//           <div className="coords">
//             <span>Item Name:</span>
//             <span> {asset.name} </span>
//           </div>
//           <div className="coords">
//             <span>Customizable:</span>
//             <span> {asset.patternCustomize} </span>
//           </div>
//           <div className="stats">
//             <div>
//               <div className="title">Size</div>
//               <i className="fa fa-trophy"></i>
//               <div className="value"> {asset.size} </div>
//             </div>
//             <div>
//               <div className="title">Buy</div>
//               <i className="fa fa-gamepad"></i>
//               <div className="value"> {asset.variants[0].buy} </div>
//             </div>
//             <div>
//               <div className="title">Sell</div>
//               <i className="fa fa-group"></i>
//               <div className="value"> {asset.variants[0].buy} </div>
//             </div>
//             <div>
//               <div className="title">Source</div>
//               <i className="fa fa-coffee"></i>
//               <div className="value"> {asset.variants[0].source[0]} </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="general">
//         <h1> {asset.catalog} </h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat
//           mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.
//         </p>
//         <span className="more">Mouse over the card for more info</span>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

import React from "react";
import ImgProxy from "../imgproxy/imgproxy";

const ItemCard = ({ asset }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#ffebee" }}
        className="w-full max-w-md mb-3 bg-white rounded-lg lg:m-3 lg:w-auto xl:w-1/3"
      >
        <div className="flex justify-center overflow-hidden rounded-lg shadow-xl">
          <ImgProxy width={384} height={384} url={asset.houseImage} />
        </div>
        <div className="p-4">
          <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
            {asset.name} • {asset.species}
          </p>
          <div className="text-gray-900 list-disc">
            <ul>
              <li>
                <strong>Gender:</strong> {asset.gender}
              </li>
              <li>
                <strong>Personality:</strong> {asset.personality}
              </li>
              <li>
                <strong>Hobby:</strong> {asset.hobby}
              </li>
              <li>
                <strong>Favorite Song:</strong> {asset.favoriteSong}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex p-4 text-gray-700 border-t border-gray-300">
          <div className="inline-flex items-center flex-1">
            <svg
              className="w-6 h-6 mr-3 text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
            </svg>
            <p>
              <span className="font-bold text-gray-900">3</span> Bedrooms
            </p>
          </div>
          <div className="inline-flex items-center flex-1">
            <svg
              className="w-6 h-6 mr-3 text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
              ></path>
            </svg>
            <p>
              <span className="font-bold text-gray-900">2</span> Bathrooms
            </p>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 bg-gray-100 border-t border-gray-300 rounded-lg shadow-xl">
          <div className="text-xs font-bold tracking-wide text-gray-600 uppercase">
            Realtor
          </div>
          <div className="flex items-center pt-2">
            <div className="w-10 h-10 mr-3 bg-center bg-cover rounded-full">
              <img src={asset.iconImage} alt="" />
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
