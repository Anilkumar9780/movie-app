import React, { useState, useEffect } from 'react';

// package
import { GET_TVSHOW_LIST } from '../../Service/Service';
import { Loader } from '../../components/Loader/Loader';
import { MovieCard } from '../../components/DisplayMovies/MovieCards'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

export const TvShow = () => {
    const [tvShowList, setTvShowList] = useState([]);
    const [currPage] = useState(1);

    /**
       *  get TVShow List 
       */
    const getTVShowList = async () => {
        try {
            const { data } = await GET_TVSHOW_LIST(currPage);
            setTvShowList([...tvShowList, ...data.results]);
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
        getTVShowList();
    }, [])

    console.log(tvShowList)

    return (
        <>
            <InfiniteScroll
                dataLength={tvShowList.length}
                next={getTVShowList}
                hasMore={true}
                loader={<Loader />}
                endMessage={<h4>Nothing more to show</h4>}
                scrollThreshold={0.5}
                scrollableTarget="scrollableDiv"
            >
                {tvShowList.map((movies, index) => {
                    return <div className="col-md-3 col-sm-3" key={index}>
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
