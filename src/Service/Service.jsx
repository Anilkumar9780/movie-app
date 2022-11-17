// package
import axios from "axios";

// components
import { URLS } from "./Config/URL";

/**
 * Get Movie List
 */
export const GetMovie = async () => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}`);
};