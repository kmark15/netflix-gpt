import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie, addPopularMovies } from "../utils/movieSlice.js";
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

  const getPopularMovies = async () => {
    const repsonse = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_CONSTANTS
    );
    const json = await repsonse.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
