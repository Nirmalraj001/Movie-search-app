import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Loader from "./Loader";

const SearchResultsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const searchResults = useSelector((state) => state.searchResults);
  const loader = useSelector((state) => state.loading);
  const navigate = useNavigate();

  console.log(searchResults, "searchResults");

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchResults?.slice(
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
      {searchResults ? (
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
      ) : (
        <div class="noMovieFound">
          <h1>No Movie Found</h1>
        </div>
      )}
      {/* Pagination */}
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={searchResults?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchResultsComponent;
