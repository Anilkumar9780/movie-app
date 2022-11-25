import React from 'react';

//component
import { Movie } from './Cards';

export const MovieList = ({ movieList }) => {
    return (
        <>
            {movieList.map((movies, index) => {
                return <div className="col-md-3 col-sm-3" key={index}>
                    <Movie
                        movie_id={movies.id}
                        first_air_date={movies.first_air_date ? movies.first_air_date : movies.release_date}
                        overview={movies.overview}
                        poster_path={movies.poster_path ? movies.poster_path : movies.backdrop_path}
                        name={movies.original_name ? movies.original_name : movies.original_title}
                        media_type={movies.media_type}
                        vote_average={movies.vote_average}
                        original_language={movies.original_language}
                    />
                </div>
            })}
        </>
    );
}
