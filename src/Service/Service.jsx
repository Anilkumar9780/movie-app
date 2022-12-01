// package
import axios from "axios";

// components url
import { URLS } from "./Config/URL";

//api key
const apikey = "460ede70f28006cdd5dbe5510d0323a1";

// get trending list
export const GET_TRENDING_MOVIE_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/trending/all/day?api_key=${apikey}&page=${currPage}&total_page=36106`)
}

// get movie list
export const GET_MOVIE_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/popular?api_key=${apikey}&page=${currPage}&total_page=36106`)
}

// get tvshow list
export const GET_TVSHOW_LIST = async (currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/tv/popular?api_key=${apikey}&page=${currPage}&total_pages=36106`)
}

// get search list
export const GET_SERACH_LIST = async (mediaType, searchMovies, currPage) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/search/${mediaType}?api_key=${apikey}&query=${searchMovies}&page=${currPage}&total_pages=36106`)
}

//get movie detail list
export const GET_MOVIE_DETAIL = async (id) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/${id}?api_key=${apikey}`)
}

//get movie reviews
export const GET_MOVIE_REVIEWS = async (movie_id) => {
  return await axios.get(`${URLS.GET_MOVIE_LIST}/3/movie/${movie_id}/reviews?api_key=${apikey}`)
}


// https://api.themoviedb.org/3/movie/popular?api_key=460ede70f28006cdd5dbe5510d0323a1
















// \\import React, { useState, useEffect } from 'react'

// const  GetMovie = ()=> {
//   const [movies, setMovie] = useState([])


//   useEffect(() => {
//     fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json`,
//       {
//       headers: ({
//         "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//         "x-rapidapi-key": "59b107254bmshc8d75c6cfb204d5p11148ejsnd3da153ac53e"
//       })
//     })
//       .then(response => response.json())
//       .then(response => {       
//         setMovie(response)
//     })
//   },[])
 
//   return (
//     <div>
//       <ul>
//      {movies.map(item => (<li>{item}</li>))}
//      </ul>
//     </div>
//   )
// }