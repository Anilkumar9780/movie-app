// package
import axios from "axios";

// components
import { URLS } from "./Config/URL";

/**
 * serach movie
 * @param {string} mediaType 
 * @param {string} searchMovies 
 * @returns array
 */
export const SEARCH_MOVIE_CATEGORY = async (mediaType, searchMovies) => {
  return await axios.get(`${URLS.GET_MOVIE_SEARCH}${mediaType}?api_key=5e08d71020658f7d21004276635bdf7f&query=${searchMovies}&page=1`);
};

/**
 * Get Movie List
 */
export const AUTO_SCROLL_PAGINATION = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}&page=${currPage}&total_page=1000`)
}
