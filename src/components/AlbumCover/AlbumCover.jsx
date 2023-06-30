import React from "react";
import "./albumCover.css";
import { Image } from "antd";
import albumCover from "../Images/animation.gif";
import weddingRing from "../Images/wedding-rings-wedding-svgrepo-com.svg";

const AlbumCover = () => {
  return (
    <div className="banner-with-text">
      <div className="text">
        <h2>
          Our Wedding
          <Image
            height="50px"
            preview="false"
            src={weddingRing}
            alt="Album Cover"
          />
        </h2>
        <p>Steven & Sandhra</p>
        <p className="date">07/01/2024</p>
      </div>
      <div className="image">
        <Image height="75vh" src={albumCover} alt="Album Cover" />
      </div>
    </div>
  );
};

export default AlbumCover;
