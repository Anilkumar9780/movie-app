/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

//images
import img1 from '../../img/uploads/ads1.png';
import img0 from '../../img/uploads/image1.jpg'
import img2 from '../../img/uploads/image2.jpg'
import img3 from '../../img/uploads/image3.jpg'
import img4 from '../../img/uploads/image4.jpg'
import play from '../../img/uploads/play-vd.png'
import cat3 from '../../img/uploads/cast3.jpg'
import cat4 from '../../img/uploads/cast4.jpg'
import cat5 from '../../img/uploads/cast5.jpg'
import cat6 from '../../img/uploads/cast6.jpg'
import item1 from '../../img/uploads/vd-item1.jpg'
import item2 from '../../img/uploads/vd-item2.jpg'
import item3 from '../../img/uploads/vd-item3.jpg'
import item4 from '../../img/uploads/vd-item4.jpg'


//packages
import { useParams, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

//component
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST, GET_MOVIE_REVIEWS, } from '../../Service/Service';
import { Loader } from '../../components/Loader/Loader';

export const MovieDetails = () => {
  //states
  let page = 1;
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reatedMovie, setReatedMovie] = useState([]);
  const [openTab, setOpenTab] = useState(1);
  const params = useParams();
  const id = params.movie_id;

  /**
   * get Movie Deatil
   */
  const getMovieDeatil = async () => {
    try {
      const { data } = await GET_MOVIE_DETAIL(id);
      setMovies(data);
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  /**
   * get movie reviews
   */
  const getMovieReviews = async () => {
    try {
      const { data } = await GET_MOVIE_REVIEWS(id);
      setReviews(data.results)
      page = page + 1;
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  /**
   * get reated movie
   */
  const getReatedMovies = async () => {
    try {
      const { data } = await GET_MOVIE_LIST();
      setReatedMovie(data.results)
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  /**
   * component did mount
   */
  useEffect(() => {
    getReatedMovies()
    getMovieDeatil()
    getMovieReviews()
  }, []);

  return (
    <>
      <div className="hero sr-single-hero sr-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </div>
      <div className="page-single movie-single movie_single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="movie-img sticky-sb">
                <img src={"https://image.tmdb.org/t/p/w500" + movies.poster_path} alt={movies.poster_path} />
                <div className="movie-btn">
                  <div className="btn-transform transform-vertical red">
                    <div><NavLink href="#" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</NavLink>
                    </div>
                    <div><NavLink href="#"
                      className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></NavLink>
                    </div>
                  </div>
                  <div className="btn-transform transform-vertical">
                    <div><NavLink href="#" className="item item-1 yellowbtn"> <i className="ion-card"></i> Buy ticket</NavLink>
                    </div>
                    <div><NavLink href="#" className="item item-2 yellowbtn"><i className="ion-card"></i></NavLink></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="movie-single-ct main-content">
                <h1 className="bd-hd">{movies.original_name ? movies.original_name : movies.original_title} ({movies.original_language})<span> {movies.first_air_date ? movies.first_air_date : movies.release_date}</span></h1>
                <div className="social-btn">
                  <NavLink href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</NavLink>
                  <div className="hover-bnt">
                    <NavLink href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</NavLink>
                    <div className="hvr-item">
                      <NavLink href="https://www.facebook.com" className="hvr-grow"><i className="ion-social-facebook"></i></NavLink>
                      <NavLink href="https://twitter.com/explore" className="hvr-grow"><i className="ion-social-twitter"></i></NavLink>
                      <NavLink href="https://www.google.com" className="hvr-grow"><i className="ion-social-googleplus"></i></NavLink>
                      <NavLink href="https://www.youtube.com" className="hvr-grow"><i className="ion-social-youtube"></i></NavLink>
                    </div>
                  </div>
                </div>
                <div className="movie-rate">
                  <div className="rate">
                    <i className="ion-android-star"></i>
                    <p><span>{movies.vote_average}</span> /10<br />
                      <span className="rv">{reviews.length} Reviews</span>
                    </p>
                  </div>
                  <div className="rate-star">
                    <p>Rate This Movie: </p>
                    {[...Array(7).keys()].map((star) => {
                      return (<i className="ion-ios-star"></i>);
                    })}
                    <i className="ion-ios-star-outline"></i>
                  </div>
                </div>
                <div className="movie-tabs">
                  <div className="tabs">
                    <ul className="tab-links tabs-mv tabs-series">
                      {/* overview tab button  */}
                      <li className={openTab === 1 ? "active" : ""}><NavLink
                        href="#overview"
                        onClick={e => { e.preventDefault(); setOpenTab(1); }}
                      >Overview</NavLink></li>
                      {/* reviews tab button */}
                      <li className={openTab === 2 ? "active" : ""}><NavLink href="#reviews"
                        onClick={e => { e.preventDefault(); setOpenTab(2); }}
                        data-toggle="tab"
                        role="tablist" > Reviews</NavLink></li>
                      {/* tab button cast */}
                      <li className={openTab === 3 ? "active" : ""}>
                        <NavLink href="#cast"
                          onClick={e => { e.preventDefault(); setOpenTab(3); }}
                          data-toggle="tab"
                          role="tablist"
                        > Cast & Crew </NavLink></li>
                      {/* media tab button */}
                      <li
                        className={openTab === 4 ? "active" : ""}><NavLink href="#media"
                          onClick={e => { e.preventDefault(); setOpenTab(4); }}
                          data-toggle="tab"
                          role="tablist"
                        > Media</NavLink></li>
                      {/* tab button related shows */}
                      <li
                        className={openTab === 6 ? "active" : ""}><NavLink href="#moviesrelated"
                          onClick={e => { e.preventDefault(); setOpenTab(6); }}
                          data-toggle="tab"
                          role="tablist"
                        > Related Shows</NavLink></li>
                    </ul>
                    <div className="tab-content">
                      {/* overview tab */}
                      <div id="overview" className={openTab === 1 ? "block" : "hidden"} style={{ marginLeft: "20px" }}>
                        <div className="row">
                          <div className="col-md-8 col-sm-12 col-xs-12">
                            <p>{movies.overview}</p>
                            <div className="title-hd-sm">
                              <h4>Videos & Photos</h4>
                              <NavLink href="#" className="time">All 5 Videos & 245 Photos <i className="ion-ios-arrow-right"></i></NavLink>
                            </div>
                            <div className="mvsingle-item ov-item">
                              <NavLink className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src={img0} alt="" /></NavLink>
                              <NavLink className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src={img2} alt="" /></NavLink>
                              <NavLink className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src={img3} alt="" /></NavLink>
                              <div className="vd-it">
                                <img className="vd-img" src={img4} alt="" />
                                <NavLink className="fancybox-media hvr-grow" href=""><img src={play} alt="" /></NavLink>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>cast</h4>
                              <NavLink href="#" className="time">Full Cast & Crew  <i className="ion-ios-arrow-right"></i></NavLink>
                            </div>
                            {/* <!-- movie cast --> */}
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat3} alt="" />
                                  <NavLink href="#">Mark Ruffalo</NavLink>
                                </div>
                                <p>...  Bruce Banner/ Hulk</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat4} alt="" />
                                  <NavLink href="#">Chris Evans</NavLink>
                                </div>
                                <p>...  Steve Rogers/ Captain America</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat5} alt="" />
                                  <NavLink href="#">Scarlett Johansson</NavLink>
                                </div>
                                <p>...  Natasha Romanoff/ Black Widow</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat6} alt="" />
                                  <NavLink href="#">Jeremy Renner</NavLink>
                                </div>
                                <p>...  Clint Barton/ Hawkeye</p>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                            </div>
                            {/* <!-- movie user review --> */}
                          </div>
                          <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="sb-it">
                              <h6>Director: </h6>
                              <p><NavLink href="#">Joss Whedon</NavLink></p>
                            </div>
                            <div className="sb-it">
                              <h6>Writer: </h6>
                              <p><NavLink href="#">Joss Whedon,</NavLink> <NavLink href="#">Stan Lee</NavLink></p>
                            </div>
                            <div className="sb-it">
                              <h6>Stars: </h6>
                              <p><NavLink href="#">Robert Downey Jr,</NavLink> <NavLink href="#">Chris Evans,</NavLink> <NavLink href="#">Mark Ruffalo,</NavLink><NavLink href="#"> Scarlett Johansson</NavLink></p>
                            </div>
                            <div className="sb-it">
                              <h6>Genres:</h6>
                              {/* {movies.genres.map((genre) => {
                                return (<p><NavLink href="#">{genre.name}</NavLink> </p>)
                              })} */}
                            </div>
                            <div className="sb-it">
                              <h6>Release Date:</h6>
                              <p>{movies.release_date} ({movies.original_language})</p>
                            </div>
                            <div className="sb-it">
                              <h6>Run Time:</h6>
                              <p>{movies.runtime}min</p>
                            </div>
                            <div className="sb-it">
                              <h6>MMPA Rating:</h6>
                              <p>PG-{movies.vote_count}</p>
                            </div>
                            <div className="sb-it">
                              <h6>Plot Keywords:</h6>
                              <p className="tags">
                                <span className="time"><NavLink href="#">superhero</NavLink></span>
                                <span className="time"><NavLink href="#">marvel universe</NavLink></span>
                                <span className="time"><NavLink href="#">comic</NavLink></span>
                                <span className="time"><NavLink href="#">blockbuster</NavLink></span>
                                <span className="time"><NavLink href="#">final battle</NavLink></span>
                              </p>
                            </div>
                            <div className="ads">
                              <img src={img1} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* reviews tab */}
                      <div id="reviews" className={openTab === 2 ? "block" : "hidden"} style={{ marginLeft: "20px" }}>
                        <div className="row">
                          <div className="rv-hd">
                            <div className="div" >
                              <h3 >Related Movies To</h3>
                              <h2 >{movies.original_name ? movies.original_name : movies.original_title}</h2>
                              &nbsp; &nbsp;&nbsp;
                            </div>
                            <NavLink href="#" className="redbtn" style={{ marginLeft: "210px" }}>Write Review</NavLink>
                          </div>
                          <div className="topbar-filter">
                            <p>Found <span>{reviews.length} reviews</span> in total</p>
                            <label>Filter by:</label>
                            <select>
                              <option value="range">-- Choose option --</option>
                              <option value="saab">-- Choose option 2--</option>
                            </select>
                          </div>
                          <InfiniteScroll
                            pageStart={0}
                            dataLength={reviews.length}
                            next={() => getMovieReviews()}
                            hasMore={reviews.length < 40 ? true : false}
                            scrollableTarget="scrollableDiv"
                            loader={<div className="loader" key={0}><Loader /></div>}
                            endMessage={
                              <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                              </p>
                            }
                          >
                            {/* mapping users reviews */}
                            {reviews.map((users, index) => {
                              return <div className="mv-user-review-item" key={index}>
                                <div className="user-infor">
                                  <img src="https://image.tmdb.org/t/p/original/1kks3YnVkpyQxzw36CObFPvhL5f.jpg" alt={movies.avatar_path} />
                                  <div>
                                    <h4 style={{ color: "#abb7c4", }} >{users.author}</h4>
                                    <div className="no-star">
                                      {users.author_details.rating}/10   &nbsp;&nbsp;
                                      {[...Array(7).keys()].map((star, ind) => {
                                        return (
                                          <i className="ion-android-star" key={ind} />
                                        );
                                      })}
                                      <i className="ion-android-star last"></i>
                                    </div>
                                    <p className="time">
                                      {users.created_at}  by <NavLink href="#"> {users.author_details.username}</NavLink>
                                    </p>
                                  </div>
                                </div>
                                <p>{users.content}</p>
                              </div>
                            })}
                          </InfiniteScroll>
                        </div>
                      </div>
                      {/* cast tap */}
                      <div id="cast" className={openTab === 3 ? "block" : "hidden"} style={{ marginLeft: "10px" }}>
                        <div className="rv-hd" style={{ marginLeft: "-4px" }}>
                          <div className="div" >
                            <h3 >Cast & Crew of</h3>
                            <h2 >{movies.original_name ? movies.original_name : movies.original_title}</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="title-hd-sm">
                              <h4>Directors & Credit Writers</h4>
                            </div>
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <h4>JW</h4>
                                  <NavLink href="#">Joss Whedon</NavLink>
                                </div>
                                <p>...  Director</p>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>Directors & Credit Writers</h4>
                            </div>
                            {/* <!-- movie credit --> */}
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat3} alt="" />
                                  <NavLink href="#">Mark Ruffalo</NavLink>
                                </div>
                                <p>...  Bruce Banner/ Hulk</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat4} alt="" />
                                  <NavLink href="#">Chris Evans</NavLink>
                                </div>
                                <p>...  Steve Rogers/ Captain America</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat5} alt="" />
                                  <NavLink href="#">Scarlett Johansson</NavLink>
                                </div>
                                <p>...  Natasha Romanoff/ Black Widow</p>
                              </div>
                            </div>
                            {/* cast */}
                            <div className="title-hd-sm">
                              <h4>Cast</h4>
                            </div>
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat4} alt="" />
                                  <NavLink href="#">Chris Evans</NavLink>
                                </div>
                                <p>...  Steve Rogers/ Captain America</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat5} alt="" />
                                  <NavLink href="#">Scarlett Johansson</NavLink>
                                </div>
                                <p>...  Natasha Romanoff/ Black Widow</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={cat6} alt="" />
                                  <NavLink href="#">Jeremy Renner</NavLink>
                                </div>
                                <p>...  Clint Barton/ Hawkeye</p>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>Produced by</h4>
                            </div>
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <h4>LD</h4>
                                  <NavLink href="#">Louis D’Esposito</NavLink>
                                </div>
                                <p>...  executive producer</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <h4>JF</h4>
                                  <NavLink href="#">Jon Favreau</NavLink>
                                </div>
                                <p>...  executive producer</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <h4>KF</h4>
                                  <NavLink href="#">Kevin Feige</NavLink>
                                </div>
                                <p>...  producer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* media tap */}
                      <div id="media" className={openTab === 4 ? "block" : "hidden"} style={{ marginLeft: "20px" }}>
                        <div className="rv-hd" style={{ marginLeft: "-20px" }} >
                          <div className="div">
                            <h3>Videos & Photos of</h3>
                            <h2>The Big Bang Theory</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="title-hd-sm">
                            <h4>Videos <span>(8)</span></h4>
                          </div>
                          <div className="mvsingle-item media-item">
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={item4} alt="" />
                                <NavLink className="fancybox-media hvr-grow"
                                ><img
                                    src={play} alt="" /></NavLink>
                              </div>
                              <div className="vd-infor">
                                <h6> <NavLink href="#">Interview: Scarlett Johansson</NavLink></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={item1} alt="" />
                                <NavLink className="fancybox-media hvr-grow"
                                ><img
                                    src={play} alt="" /></NavLink>
                              </div>
                              <div className="vd-infor">
                                <h6> <NavLink href="#">Featurette: Meet Quicksilver & The Scarlet
                                  Witch</NavLink></h6>
                                <p className="time"> 1: 31</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={item2} alt="" />
                                <NavLink className="fancybox-media hvr-grow"
                                ><img
                                    src={play} alt="" /></NavLink>
                              </div>
                              <div className="vd-infor">
                                <h6> <NavLink href="#">Interview: Director Joss Whedon</NavLink></h6>
                                <p className="time"> 1: 03</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={item3} alt="" />
                                <NavLink className="fancybox-media hvr-grow"
                                ><img
                                    src={play} alt="" /></NavLink>
                              </div>
                              <div className="vd-infor">
                                <h6> <NavLink href="#">Interview: Mark Ruffalo</NavLink></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                          </div>
                          <div className="title-hd-sm">
                            <h4>Photos <span> (21)</span></h4>
                          </div>
                          <div className="mvsingle-item media-item">
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={img0} alt="" />
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={img2} alt="" />
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={img3} alt="" />
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={img4} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* related movies tab */}
                      <div id="moviesrelated" className={openTab === 6 ? "block" : "hidden"} style={{ marginLeft: "20px" }}>
                        <div className="row">
                          <div className="rv-hd">
                            <div className="div" >
                              <h3 >Related Movies To</h3>
                              <h2 >Skyfall: Quantum of Spectre</h2>
                              &nbsp; &nbsp;&nbsp;
                            </div>
                          </div>
                          <div className="topbar-filter">
                            <p>Found <span>12 movies</span> in total</p>
                            <label>Sort by:</label>
                            <select>
                              <option value="popularity">Popularity Descending</option>
                              <option value="popularity">Popularity Ascending</option>
                              <option value="rating">Rating Descending</option>
                              <option value="rating">Rating Ascending</option>
                              <option value="date">Release date Descending</option>
                              <option value="date">Release date Ascending</option>
                            </select>
                          </div>
                          {/* mapping reated movie */}
                          <InfiniteScroll
                            pageStart={10}
                            dataLength={reatedMovie.length}
                            next={() => getReatedMovies()}
                            hasMore={reviews.length < 40 ? true : false}
                            scrollableTarget="scrollableDiv"
                            loader={<div className="loader" key={0}><Loader /></div>}
                            endMessage={
                              <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                              </p>
                            }
                          >
                            {reatedMovie.map((movie, index) => {
                              return <div className="movie-item-style-2" key={index}>
                                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.poster_path} />
                                <div className="mv-item-infor">
                                  <h6><NavLink href="#">{movies.original_name ? movie.original_name : movie.original_title} ({movie.original_language})<span>{movie.first_air_date ? movie.first_air_date : movie.release_date.toString(0.4)}</span></NavLink></h6>
                                  <p className="rate"><i className="ion-android-star"></i><span>{movie.vote_average}</span> /10</p>
                                  <p className="describe">{movie.overview}</p>
                                  <p className="run-time"> Run Time:{movies.runtime}. <span>MMPA: PG-{movie.vote_count}</span> .
                                    <span>Release: {movie.release_date}</span></p>
                                </div>
                              </div>
                            })}
                          </InfiniteScroll>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
