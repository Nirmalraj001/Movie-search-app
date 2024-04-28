import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import SearchComponent from "./Component/SearchComponent";
import SearchResultsComponent from "./Component/SearchResultsComponent";
import MovieDetailComponent from "./Component/MovieDetailComponent";
import "./App.css";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchComponent />
                <SearchResultsComponent />
              </>
            }
          />
          <Route
            path="/movie/:imdbID"
            element={<MovieDetailComponent />}
            // render={({ match }) => (
            //   <MovieDetailComponent imdbID={match.params.imdbID} />
            // )}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
