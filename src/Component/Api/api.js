import axios from 'axios';

const API_KEY = '3bd483f3';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    console.log(response,"response")
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
