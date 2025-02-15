/* eslint-disable react/prop-types */
import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="mx-1">
      <img alt="MovieImage" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
