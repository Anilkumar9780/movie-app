// api url get .env file
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const URLS = {

    // get all movie data url
    GET_MOVIE_LIST: `${BASE_URL}/3/movie/popular?api_key=460ede70f28006cdd5dbe5510d0323a1`,
    
    //search Movie url
    GET_MOVIE_SEARCH: `${BASE_URL}/3/search/`,
}