import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Loader from "./Loader";

const SearchResultsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const searchResults = useSelector((state) => state.searchResults);
  const loader = useSelector(state => state.loading);
  const navigate = useNavigate();

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchResults.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleMovieClick = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div>
      {loader && <Loader />}
      <div class="card-container">
        {currentMovies.map((movie) => (
          <div
            class="card"
            key={movie.imdbID}
            onClick={() => handleMovieClick(movie.imdbID)}
          >
            <div class="card-image">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div class="card-content">
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={searchResults.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchResultsComponent;
