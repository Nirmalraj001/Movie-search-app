import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "./Api/api";
import Loader from "./Loader";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Title");

  const searchResults = useSelector((state) => state.searchResults);
  const loader = useSelector(state => state.loading);

  const dispatch = useDispatch();

  // Search movies
  const handleSearch = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const results = await searchMovies(query);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  // Sort movies
  const sortMovies = (e) => {
    setSortBy(e.target.value);
    const sortedMovies = [...searchResults].sort((a, b) => {
      if (e.target.value === "Year") {
        return parseInt(a.Year) - parseInt(b.Year);
      } else {
        return a.Title.localeCompare(b.Title);
      }
    });
    dispatch({ type: "SET_SEARCH_RESULTS", payload: sortedMovies });
  };

  return (
    <div class="search-container">
      {loader && <Loader />}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        class="search-input"
      />
      <button onClick={handleSearch} class="search-button">
        Search
      </button>

      {searchResults.length !== 0 && (
        <select class="custom-select" value={sortBy} onChange={sortMovies}>
          <option value="Title">Title</option>
          <option value="Year">Year</option>
        </select>
      )}
    </div>
  );
};

export default SearchComponent;
