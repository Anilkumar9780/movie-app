import React, { useState, useEffect } from 'react';

// package
import { GET_MOVIE_LIST } from '../../Service/Service';
import { Loader } from '../../Loader/Loader';
import { MovieList } from '../../components/DisplayCard/MovieList'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

//images
import img from '../../img/logo1.png'

export const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [currPage] = useState(1);

    /**
   *  get movie list 
   */
    const getMovieList = async () => {
        try {
            const { data } = await GET_MOVIE_LIST(currPage);
            setMovieList([...movieList, ...data.results]);

        } catch (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    };

    /**
     * passing dep
     */
    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <>
            <InfiniteScroll
                dataLength={movieList.length}
                // next={getMovieList}
                hasMore={true}
                loader={<Loader />}
                endMessage={<h4>Nothing more to show</h4>}
                scrollThreshold={0.5}
                scrollableTarget="scrollableDiv"
            >
                <MovieList
                    movieList={movieList}
                />
            </InfiniteScroll>
        </>
    )
}
