import React from "react";
import "./card.css";

const ItemCard = ({ asset }) => {
  return (
    <div className="card">
      <div
        style={{
          background: asset.variants[0].colors[0],
        }}
        className="additional"
      >
        <div className="user-card">
          <div className="level center">Level 13</div>
          <div className="points center">5,312 Points</div>
          <img
            className="center"
            src={asset.variants[0].image}
            alt={asset.name}
          />
        </div>
        <div className="more-info">
          <h1> {asset.name} </h1>
          <div className="coords">
            <span>Item Name:</span>
            <span> {asset.name} </span>
          </div>
          <div className="coords">
            <span>Customizable:</span>
            <span> {asset.patternCustomize} </span>
          </div>
          <div className="stats">
            <div>
              <div className="title">Size</div>
              <i className="fa fa-trophy"></i>
              <div className="value"> {asset.size} </div>
            </div>
            <div>
              <div className="title">Buy</div>
              <i className="fa fa-gamepad"></i>
              <div className="value"> {asset.variants[0].buy} </div>
            </div>
            <div>
              <div className="title">Sell</div>
              <i className="fa fa-group"></i>
              <div className="value"> {asset.variants[0].buy} </div>
            </div>
            <div>
              <div className="title">Source</div>
              <i className="fa fa-coffee"></i>
              <div className="value"> {asset.variants[0].source[0]} </div>
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h1> {asset.catalog} </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
          volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
          pulvinar.
        </p>
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
};

export default ItemCard;
