import React, { useState } from 'react';

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

//component
import { GET_SERACH_LIST } from '../../Service/Service';
import { Loader } from '../../Loader/Loader';
import { Movie } from '../../components/DisplayCard/Cards'

export const Search = () => {
    // states
    const [movieList, setMovieList] = useState([]);
    const [searchMovies, setSearchMovies] = useState('');
    const [mediaType, setMediaType] = useState();

    /** 
     * onchange input search  
     * @param {object} event 
     */
    const handleSelectOnchange = (event) => {
        setMediaType(event.target.value);
    };

    /**
     * submit handle search 
     */
    const handlesearch = async () => {
        try {
            const { data } = await GET_SERACH_LIST(mediaType, searchMovies);
            setMovieList(data.results);
            console.log(data.results)
        } catch (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        setSearchMovies('')
    };
    
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
                {movieList.map((movies, index) => {
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
            <div className="top-search">
                <select onChange={handleSelectOnchange} value={mediaType}>
                    <option value="movie">TV show</option>
                    <option value="tv">Movies</option>
                </select>
                <input
                    onChange={e => setSearchMovies(e.target.value)}
                    value={searchMovies}
                    type="text"
                    placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                />
                <button className="btn btn-outline-dark" onClick={handlesearch} type="submit"><i className='fa fa-search'></i></button>
            </div>
        </>
    )
}
