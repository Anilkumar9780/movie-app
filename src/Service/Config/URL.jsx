// api url get .env file
const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);
export const URLS = {

    // get all movie data
    GET_MOVIE_LIST: `${BASE_URL}`,
}