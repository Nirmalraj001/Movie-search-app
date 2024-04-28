import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "./Api/api"; // Assuming you have implemented API functions
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const MovieDetailComponent = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const movie = useSelector((state) => state.selectedMovie);
  const loader = useSelector(state => state.loading);


  console.log(movie, "params");

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(imdbID);
      dispatch({ type: "SET_SELECTED_MOVIE", payload: details });
      dispatch({ type: "SET_LOADING", payload: false });
    };

    fetchMovieDetails();
  }, [dispatch, imdbID]);

  if (loader) return <Loader />;

  return (
    <div class="movie__card">
      <img src={movie.Poster} class="card__image" alt="brown couch" />
      <div class="card__content">
        <span class="card__title">{movie.Title}</span>
        <h2 class="card__date">{movie.Plot}</h2>
        <p>Rating: {movie.imdbRating}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Cast: {movie.Actors}</p>
      </div>
    </div>
  );
};

export default MovieDetailComponent;
