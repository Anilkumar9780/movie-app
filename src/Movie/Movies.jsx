/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from 'react';

// component 
import { AUTO_SCROLL_PAGINATION } from '../Service/Service';
import { Movie } from './MovieList/MovieCards';
import { Footer } from '../Footer/Footer'

// images
import img2 from '../img/uploads/ads1.png'
import facebook from '../img/facebook.jpg';
import Tweet from '../img/tweet.png'

// package
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavBar } from '../Search/NavBar';

export const MovieCard = () => {

  //states
  const [currPage] = useState(1);
  const [movieList, setMovieList] = useState([]);

  /**
   *  get movie list 
   */
  const GetMoreMovie = async () => {
    try {
      const { data } = await AUTO_SCROLL_PAGINATION(currPage);
      setMovieList([...movieList, ...data.results]);
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  /**
   *  dependency passing first time render
   */
  useEffect(() => {
    GetMoreMovie()
  }, [])

  return (
    <Fragment>
      <NavBar
        setMovieList={setMovieList}
        movieList={movieList}
      />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>Found <span>{movieList.length} movies</span> in total</p>
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Descending</option>
                  <option value="popularity">Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="movielist.html" className="list"><i className="ion-ios-list-outline "></i></a>
                <a href="moviegrid.html" className="grid"><i className="ion-grid active"></i></a>
              </div>
              <div className="flex-wrap-movielist">
                <div id="scrollableDiv" style={{ height: "200vh", overflow: "auto" }}>
                  <InfiniteScroll
                    dataLength={movieList.length}
                    next={GetMoreMovie}
                    hasMore={true}
                    loader={<h3> Loading...</h3>}
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
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                          <select name="skills" multiple="" className="ui fluid dropdown">
                            <option value="">Enter to filter genres</option>
                            <option value="Action1">Action 1</option>
                            <option value="Action2">Action 2</option>
                            <option value="Action3">Action 3</option>
                            <option value="Action4">Action 4</option>
                            <option value="Action5">Action 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Rating Range</label>
                        <select>
                          <option value="range">-- Select the rating range below --</option>
                          <option value="saab">-- Select the rating range below --</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">From</option>
                              <option value="number">10</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">To</option>
                              <option value="number">20</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input className="submit" type="submit" value="submit" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src={img2} alt="" />
                </div>
                <div className="sb-facebook sb-it">
                  <h4 className="sb-title">Find us on Facebook</h4>
                  <img src={facebook} alt={facebook}></img>
                </div>
                <div className="sb-twitter sb-it">
                  <h4 className="sb-title">Tweet to us</h4>
                  <div className="slick-tw">

                    <div className="tweet item" id="">
                      <img src={Tweet} alt={Tweet} />
                    </div>
                    <div className="tweet item" id="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

