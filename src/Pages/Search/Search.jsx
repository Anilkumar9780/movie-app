import React from 'react';

// package
import InfiniteScroll from 'react-infinite-scroll-component';

//component
import { Loader } from '../../Loader/Loader';
import { MovieList } from '../../components/DisplayCard/MovieList'

export const Search = ({
    movieList,
    handlesearch
}) => {
    return (
        <>
            <InfiniteScroll
                dataLength={movieList.length}
                next={handlesearch}
                hasMore={true}
                loader={<Loader />}
                endMessage={<h4>Nothing more to show</h4>}
                scrollThreshold={0.5}
                scrollableTarget="scrollableDiv"
            >
                <MovieList movieList={movieList} />
            </InfiniteScroll>
        </>
    )
}
