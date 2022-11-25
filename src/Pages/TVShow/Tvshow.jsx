import React, { useState, useEffect } from 'react';

// package
import { GET_TVSHOW_LIST } from '../../Service/Service';
import { Loader } from '../../Loader/Loader';
import { MovieList } from '../../components/DisplayCard/MovieList'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

//images
import img from '../../img/logo1.png'

export const TvShow = () => {
    const [loading, setLoading] = useState(false);
    const [tvShowList, setTvShowList] = useState([]);
    const [currPage] = useState(1);

    /**
       *  get TVShow List 
       */
    const getTVShowList = async () => {
        setLoading(true);
        try {
            const { data } = await GET_TVSHOW_LIST(currPage);
            setTvShowList([...tvShowList, ...data.results]);
            setLoading(false);
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
                <MovieList movieList={tvShowList} />
            </InfiniteScroll>
            {loading &&
                <div id="preloader">
                    <img class="logo" src={img} alt="" width="119" height="58" />
                    <div id="status">
                        <span></span>
                        <span></span>
                    </div>
                </div>}
        </>
    )
}
