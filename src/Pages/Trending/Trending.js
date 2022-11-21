import React, { useState } from 'react';

// package
import { GET_TRENDING_MOVIE_LIST } from '../../Service/Service';
import { Loader } from '../../Loader/Loader';
import { Movie } from '../../components/DisplayCard/Cards'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';


export const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [currPage] = useState(1);

  /**
     *  get TVShow List 
     */
  const getTrendingList = async () => {
    try {
      const { data } = await GET_TRENDING_MOVIE_LIST(currPage);
      setTrendingList([...trendingList, ...data.results]);
      console.log(data.results)
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={trendingList.length}
        next={getTrendingList}
        hasMore={true}
        loader={<Loader />}
        endMessage={<h4>Nothing more to show</h4>}
        scrollThreshold={0.5}
        scrollableTarget="scrollableDiv"
      >
        {trendingList.map((movies, index) => {
          return <div className="col-md-3" key={index}>
            <Movie
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
      </InfiniteScroll>
    </>
  )
}
