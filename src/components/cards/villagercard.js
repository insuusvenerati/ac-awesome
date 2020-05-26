import React from "react";
import "./card.css";

const VillagerCard = ({ asset }) => {
  return (
    <div className="card">
      <div
        style={{
          background: asset.colors[0] === "Colorful" ? "Blue" : asset.colors[0],
        }}
        className="additional"
      >
        <div className="user-card">
          <div className="level center">Level 13</div>
          <div className="points center">5,312 Points</div>
          <img className="center" src={asset.iconImage} alt={asset.name} />
        </div>
        <div className="more-info">
          <h1> {asset.name} </h1>
          <div className="coords">
            <span>Gender:</span>
            <span> {asset.gender} </span>
          </div>
          <div className="coords">
            <span>Personality:</span>
            <span> {asset.personality} </span>
          </div>
          <div className="stats">
            <div>
              <div className="title">Hobby</div>
              <i className="fa fa-trophy"></i>
              <div className="value"> {asset.hobby} </div>
            </div>
            <div>
              <div className="title">Catchphrase</div>
              <i className="fa fa-gamepad"></i>
              <div className="value"> {asset.catchphrase} </div>
            </div>
            <div>
              <div className="title">Birthday</div>
              <i className="fa fa-group"></i>
              <div className="value"> {asset.birthday} </div>
            </div>
            <div>
              <div className="title">Favorite Song</div>
              <i className="fa fa-coffee"></i>
              <div className="value"> {asset.favoriteSong} </div>
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h1> {asset.species} </h1>
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

export default VillagerCard;
