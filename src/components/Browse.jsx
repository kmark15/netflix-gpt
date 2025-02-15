import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_CONSTANTS
    );
    const json = await response.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
