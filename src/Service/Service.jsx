// package
import axios from "axios";

// components
import { URLS } from "./Config/URL";

const apikey = "460ede70f28006cdd5dbe5510d0323a1";
/**
 * Get Movie List
 */
export const GET_TRENDING_MOVIE_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/trending/all/day?api_key=460ede70f28006cdd5dbe5510d0323a1&page=${currPage}&total_page=1000`)
}

export const GET_MOVIE_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/popular?api_key=460ede70f28006cdd5dbe5510d0323a1&page=${currPage}&total_page=1000`)
}

export const GET_TVSHOW_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/popular?api_key=460ede70f28006cdd5dbe5510d0323a1&page=${currPage}&total_page=1000`)
}


export const GET_SERACH_LIST = async (mediaType, searchMovies) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/search/${mediaType}?api_key=460ede70f28006cdd5dbe5510d0323a1&query=${searchMovies}&page=1`)
}


export const GET_MOVIE_DETAIL = async (movie_id) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/${movie_id}/?api_key=460ede70f28006cdd5dbe5510d0323a1`)
}

export const GET_MOVIE_REVIEWS = async (movie_id) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/${movie_id}/reviews?api_key=460ede70f28006cdd5dbe5510d0323a1`)
}
