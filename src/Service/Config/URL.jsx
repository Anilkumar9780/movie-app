// api url get .env file
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const URLS = {
    // get all movie data url
    GET_MOVIE_LIST: `${BASE_URL}`,
}

// https://api.themoviedb.org/3/trending/all/day?api_key=460ede70f28006cdd5dbe5510d0323a1
// https://api.themoviedb.org/3/discover/movie?api_key=460ede70f28006cdd5dbe5510d0323a1
// https://api.themoviedb.org/3/tv/popular?api_key=460ede70f28006cdd5dbe5510d0323a1
// https://api.themoviedb.org/3/movie/popular?api_key=460ede70f28006cdd5dbe5510d0323a1