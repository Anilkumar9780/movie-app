import React, { useState, useEffect, useRef } from 'react';

// package
import { GET_MOVIE_LIST } from '../Service/Service';
import { MovieCard, Loader } from '../components'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [currPage, setCurrPage] = useState(1);

    /**
   *  get movie list 
   */
    const getMovieList = async () => {
        setCurrPage(currPage + 1);
        try {
            const { data } = await GET_MOVIE_LIST(currPage + 1);
            setMovieList([...movieList, ...data.results]);
        } catch (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    useEffect(() => {
        getMovieList();
    }, []);

    // let genreList = {
    //     28: 'Action',
    //     12: 'Adventure',
    //     16: 'Animation',
    //     35: 'Comedy',
    //     80: 'Crime',
    //     99: 'Documentary',
    //     18: 'Drama',
    //     10751: 'Family',
    //     14: 'Fantasy',
    //     36: 'History',
    //     27: 'Horror',
    //     10402: 'Music',
    //     9648: 'Mystery',
    //     10749: 'Romance',
    //     878: 'Science Fiction',
    //     10770: 'TV Movie',
    //     53: 'Thriller',
    //     10752: 'War',
    //     37: 'Western'
    // };

    // console.log(genreList);
    console.log(movieList);

    return (
        <>
            <InfiniteScroll
                dataLength={movieList.length}
                next={getMovieList}
                hasMore={true}
                loader={<Loader />}
                scrollableTarget="scrollableDiv"
            >
                {movieList.map((movies, index) => {
                    return <div className="col-md-3" key={index}>
                        <MovieCard
                            movie_id={movies.id}
                            first_air_date={movies.first_air_date ? movies.first_air_date : movies.release_date}
                            poster_path={movies.poster_path ? movies.poster_path : movies.backdrop_path}
                            name={movies.original_name ? movies.original_name : movies.original_title}
                            vote_average={movies.vote_average}
                            original_language={movies.original_language}
                        />
                    </div>
                })}
            </InfiniteScroll>
        </>
    )
}
export default Movies;