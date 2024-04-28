import { createStore } from "redux";

const initialState = {
  searchResults: [],
  selectedMovie: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_SELECTED_MOVIE":
      return { ...state, selectedMovie: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
