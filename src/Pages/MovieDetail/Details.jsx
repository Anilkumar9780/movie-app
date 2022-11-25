/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

//images
import img5 from '../../img/uploads/series-img.jpg'

//packages
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

//component
import { GET_MOVIE_DETAIL, GET_MOVIE_REVIEWS } from '../../Service/Service';

export const MovieDetails = () => {
  //states
  const [movies, setMovies] = useState([]);
  const [openTab, setOpenTab] = React.useState(1);
  const params = useParams();
  const id = params.movie_id;

  /**
   * get Movie Deatil
   */
  const movieDeatil = async () => {
    try {
      const { data } = await GET_MOVIE_DETAIL(id);
      setMovies(data);
      console.log(data)
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  /**
   * get movie reviews
   */
  const movieReviews = async () => {
    try {
      const { data } = await GET_MOVIE_REVIEWS(id);
      console.log(data.results)
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
    movieDeatil()
    movieReviews()
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
                <img src={"https://image.tmdb.org/t/p/w500" + movies.poster_path ? movies.poster_path : movies.backdrop_path} alt={movies.poster_path} />
                <div className="movie-btn">
                  <div className="btn-transform transform-vertical red">
                    <div><a href="#" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</a>
                    </div>
                    <div><a href="https://www.youtube.com/embed/o-0hcF97wy0"
                      className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></a>
                    </div>
                  </div>
                  <div className="btn-transform transform-vertical">
                    <div><a href="#" className="item item-1 yellowbtn"> <i className="ion-card"></i> Buy ticket</a>
                    </div>
                    <div><a href="#" className="item item-2 yellowbtn"><i className="ion-card"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="movie-single-ct main-content">
                <h1 className="bd-hd">{movies.original_name ? movies.original_name : movies.original_title} ({movies.original_language})<span> {movies.first_air_date ? movies.first_air_date : movies.release_date}</span></h1>
                <div className="social-btn">
                  <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
                  <div className="hover-bnt">
                    <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                    <div className="hvr-item">
                      <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                    </div>
                  </div>
                </div>
                <div className="movie-rate">
                  <div className="rate">
                    <i className="ion-android-star"></i>
                    <p><span>{movies.vote_average}</span> /10<br />
                      <span className="rv">56 Reviews</span>
                    </p>
                  </div>
                  <div className="rate-star">
                    <p>Rate This Movie: </p>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star-outline"></i>
                  </div>
                </div>
                <div className="movie-tabs">
                  <div className="tabs">
                    <ul className="tab-links tabs-mv tabs-series">

                      <li className={openTab === 1 ? "active" : ""}><a
                        href="#overview"
                        onClick={e => { e.preventDefault(); setOpenTab(1); }}
                      >Overview</a></li>


                      <li className={openTab === 2 ? "active" : ""}><a href="#reviews"
                        onClick={e => { e.preventDefault(); setOpenTab(2); }}
                        data-toggle="tab"
                        role="tablist" > Reviews</a></li>

                      <li className={openTab === 3 ? "active" : ""}><a href="#cast"
                        onClick={e => { e.preventDefault(); setOpenTab(3); }}
                        data-toggle="tab"
                        role="tablist"
                      > Cast & Crew </a></li>


                      <li className={openTab === 4 ? "active" : ""}><a href="#media"
                        onClick={e => { e.preventDefault(); setOpenTab(4); }}
                        data-toggle="tab"
                        role="tablist"> Media</a></li>


                      <li className={openTab === 5 ? "active" : ""}><a href="#season"
                        onClick={e => { e.preventDefault(); setOpenTab(5); }}
                        data-toggle="tab"
                        role="tablist"> Season</a></li>


                      <li className={openTab === 6 ? "active" : ""}><a href="#moviesrelated"
                        onClick={e => { e.preventDefault(); setOpenTab(6); }}
                        data-toggle="tab"
                        role="tablist"> Related Shows</a></li>
                    </ul>
                    <div className="tab-content">




                      <div id="overview"  className={"tab" + openTab === 1 ? "active" : "hidden"}>
                        <div className="row">
                          <div className="col-md-8 col-sm-12 col-xs-12">
                            <p>{movies.overview}</p>
                            <div className="title-hd-sm">
                              <h4>Current Season</h4>
                              <a href="#" className="time">View All Seasons <i
                                className="ion-ios-arrow-right"></i></a>
                            </div>
                            {/* <!-- movie cast --> */}
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left series-it">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                  <div>
                                    <a href="#">Season 10</a>
                                    <p>21 Episodes</p>
                                    <p>Season 10 of The Big Bang Theory premiered on
                                      September 19, 2016.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>Videos & Photos</h4>
                              <a href="#" className="time">All 5 Videos & 245 Photos <i
                                className="ion-ios-arrow-right"></i></a>
                            </div>
                            <div className="mvsingle-item ov-item">
                              <a className="img-lightbox" data-fancybox-group="gal/lery"
                                href="images/uploads/image41.jpg"><img
                                  src={process.env.PUBLIC_URL + "images/uploads/image4.jpg"} alt="" /></a>
                              <a className="img-lightbox" data-fancybox-group="gal/lery"
                                href="images/uploads/image51.jpg"><img
                                  src={process.env.PUBLIC_URL + "images/uploads/image5.jpg"} alt="" /></a>
                              <a className="img-lightbox" data-fancybox-group="gal/lery"
                                href="images/uploads/image61.jpg"><img
                                  src={process.env.PUBLIC_URL + "images/uploads/image6.jpg"} alt="" /></a>
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads/image7.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>cast</h4>
                              <a href="#" className="time">Full Cast & Crew <i
                                className="ion-ios-arrow-right"></i></a>
                            </div>
                            {/* <!-- movie cast --> */}
                            <div className="mvcast-item">
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast1.jpg"} alt="" />
                                  <a href="#">Robert Downey Jr.</a>
                                </div>
                                <p>... Robert Downey Jr.</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast2.jpg"} alt="" />
                                  <a href="#">Chris Hemsworth</a>
                                </div>
                                <p>... Thor</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast3.jpg"} alt="" />
                                  <a href="#">Mark Ruffalo</a>
                                </div>
                                <p>... Bruce Banner/ Hulk</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast4.jpg"} alt="" />
                                  <a href="#">Chris Evans</a>
                                </div>
                                <p>... Steve Rogers/ Captain America</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast5.jpg"} alt="" />
                                  <a href="#">Scarlett Johansson</a>
                                </div>
                                <p>... Natasha Romanoff/ Black Widow</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast6.jpg"} alt="" />
                                  <a href="#">Jeremy Renner</a>
                                </div>
                                <p>... Clint Barton/ Hawkeye</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast7.jpg"} alt="" />
                                  <a href="#">James Spader</a>
                                </div>
                                <p>... Ultron</p>
                              </div>
                              <div className="cast-it">
                                <div className="cast-left">
                                  <img src={process.env.PUBLIC_URL + "images/uploads/cast9.jpg"} alt="" />
                                  <a href="#">Don Cheadle</a>
                                </div>
                                <p>... James Rhodes/ War Machine</p>
                              </div>
                            </div>
                            <div className="title-hd-sm">
                              <h4>User reviews</h4>
                              <a href="#" className="time">See All 56 Reviews <i
                                className="ion-ios-arrow-right"></i></a>
                            </div>
                            {/* <!-- movie user review --> */}
                            <div className="mv-user-review-item">
                              <h3>Best Marvel movie in my opinion</h3>
                              <div className="no-star">
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star"></i>
                                <i className="ion-android-star last"></i>
                              </div>
                              <p className="time">
                                17 December 2016 by <a href="#"> hawaiipierson</a>
                              </p>
                              <p>This is by far one of my favorite movies from the MCU. The
                                introduction of new Characters both good and bad also makes the
                                movie more exciting. giving the characters more of a back story can
                                also help audiences relate more to different characters better, and
                                it connects a bond between the audience and actors or characters.
                                Having seen the movie three times does not bother me here as it is
                                as thrilling and exciting every time I am watching it. In other
                                words, the movie is by far better than previous movies (and I do
                                love everything Marvel), the plotting is splendid (they really do
                                out do themselves in each film, there are no problems watching it
                                more than once.</p>
                            </div>
                          </div>
                          <div className="col-md-4 col-xs-12 col-sm-12">
                            <div className="sb-it">
                              <h6>Director: </h6>
                              <p><a href="#">Mark Cendrowski</a></p>
                            </div>
                            <div className="sb-it">
                              <h6>Writer: </h6>
                              <p><a href="#"> Chuck Lorre,</a> <a href="#">Bill Prady</a></p>
                            </div>
                            <div className="sb-it">
                              <h6>Stars: </h6>
                              <p><a href="#">Robert Downey Jr,</a> <a href="#">Chris Evans,</a> <a
                                href="#">Mark Ruffalo,</a><a href="#"> Scarlett Johansson</a>
                              </p>
                            </div>
                            <div className="sb-it">
                              <h6>Genres:</h6>
                              <p><a href="#">Action, </a> <a href="#"> Sci-Fi,</a> <a
                                href="#">Adventure</a></p>
                            </div>
                            <div className="sb-it">
                              <h6>Release Date:</h6>
                              <p>{movies.first_air_date ? movies.first_air_date : movies.release_date}(U.S.A)</p>
                            </div>
                            <div className="sb-it">
                              <h6>Run Time:</h6>
                              {/* <p>{movies.} min</p> */}
                            </div>
                            <div className="sb-it">
                              <h6>MMPA Rating:</h6>
                              {/* <p>TV-14</p> */}
                            </div>
                            <div className="sb-it">
                              <h6>Plot Keywords:</h6>
                              <p className="tags">
                                <span className="time"><a href="#">superhero</a></span>
                                <span className="time"><a href="#">marvel universe</a></span>
                                <span className="time"><a href="#">comic</a></span>
                                <span className="time"><a href="#">blockbuster</a></span>
                                <span className="time"><a href="#">final battle</a></span>
                              </p>
                            </div>
                            <div className="ads">
                              <img src={process.env.PUBLIC_URL + "images/uploads/ads1.png"} alt="/" />
                            </div>
                          </div>
                        </div>
                      </div>




                      <div id="reviews" className={"tab" + openTab === 2 ? "active" : "hidden"}>
                        <div className="row">
                          <div className="rv-hd">
                            <div className="div">
                              <h3>Related Movies To</h3>
                              <h2>Skyfall: Quantum of Spectre</h2>
                            </div>
                            <a href="#" className="redbtn">Write Review</a>
                          </div>
                          <div className="topbar-filter">
                            <p>Found <span>56 reviews</span> in total</p>
                            <label>Filter by:</label>
                            <select>
                              <option value="range">-- Choose option --</option>
                              <option value="saab">-- Choose option 2--</option>
                            </select>
                          </div>
                          <div className="mv-user-review-item">
                            <div className="user-infor">
                              <img src={process.env.PUBLIC_URL + "images/uploads/userava1.jpg"} alt="" />
                              <div>
                                <h3>Best Marvel movie in my opinion</h3>
                                <div className="no-star">
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star"></i>
                                  <i className="ion-android-star last"></i>
                                </div>
                                <p className="time">
                                  17 December 2016 by <a href="#"> hawaiipierson</a>
                                </p>
                              </div>
                            </div>
                            <p>This is by far one of my favorite movies from the MCU. The introduction
                              of new Characters both good and bad also makes the movie more exciting.
                              giving the characters more of a back story can also help audiences
                              relate more to different characters better, and it connects a bond
                              between the audience and actors or characters. Having seen the movie
                              three times does not bother me here as it is as thrilling and exciting
                              every time I am watching it. In other words, the movie is by far better
                              than previous movies (and I do love everything Marvel), the plotting is
                              splendid (they really do out do themselves in each film, there are no
                              problems watching it more than once.</p>
                          </div>
                          <div className="topbar-filter">
                            <label>Reviews per page:</label>
                            <select>
                              <option value="range">5 Reviews</option>
                              <option value="saab">10 Reviews</option>
                            </select>
                            <div className="pagination2">
                              <span>Page 1 of 6:</span>
                              <a className="active" href="#">1</a>
                              <a href="#">2</a>
                              <a href="#">3</a>
                              <a href="#">4</a>
                              <a href="#">5</a>
                              <a href="#">6</a>
                              <a href="#"><i className="ion-arrow-right-b"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>






                      <div id="cast" className={"tab" + openTab === 3 ? "active" : "hidden"}>
                        <div className="row">
                          <h3>Cast & Crew of</h3>
                          <h2>Avengers: Age of Ultron</h2>
                          {/* <!-- //== --> */}
                          <div className="title-hd-sm">
                            <h4>Directors & Credit Writers</h4>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JW</h4>
                                <a href="#">Joss Whedon</a>
                              </div>
                              <p>... Director</p>
                            </div>
                          </div>
                          {/* <!-- //== --> */}
                          <div className="title-hd-sm">
                            <h4>Directors & Credit Writers</h4>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>SL</h4>
                                <a href="#">Stan Lee</a>
                              </div>
                              <p>... (based on Marvel comics)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JK</h4>
                                <a href="#">Jack Kirby</a>
                              </div>
                              <p>... (based on Marvel comics)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JS</h4>
                                <a href="#">Joe Simon</a>
                              </div>
                              <p>... (character created by: Captain America)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JS</h4>
                                <a href="#">Joe Simon</a>
                              </div>
                              <p>... (character created by: Thanos)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>RT</h4>
                                <a href="#">Roy Thomas</a>
                              </div>
                              <p>... (character created by: Ultron, Vision)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JB</h4>
                                <a href="#">John Buscema</a>
                              </div>
                              <p>... (character created by: Ultron, Vision)</p>
                            </div>
                          </div>
                          {/* <!-- //== --> */}
                          <div className="title-hd-sm">
                            <h4>Cast</h4>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast1.jpg"} alt="" />
                                <a href="#">Robert Downey Jr.</a>
                              </div>
                              <p>... Robert Downey Jr.</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast2.jpg"} alt="" />
                                <a href="#">Chris Hemsworth</a>
                              </div>
                              <p>... Thor</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast3.jpg"} alt="" />
                                <a href="#">Mark Ruffalo</a>
                              </div>
                              <p>... Bruce Banner/ Hulk</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast4.jpg"} alt="" />
                                <a href="#">Chris Evans</a>
                              </div>
                              <p>... Steve Rogers/ Captain America</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast5.jpg"} alt="" />
                                <a href="#">Scarlett Johansson</a>
                              </div>
                              <p>... Natasha Romanoff/ Black Widow</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast6.jpg"} alt="" />
                                <a href="#">Jeremy Renner</a>
                              </div>
                              <p>... Clint Barton/ Hawkeye</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast7.jpg"} alt="" />
                                <a href="#">James Spader</a>
                              </div>
                              <p>... Ultron</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <img src={process.env.PUBLIC_URL + "images/uploads/cast9.jpg"} alt="" />
                                <a href="#">Don Cheadle</a>
                              </div>
                              <p>... James Rhodes/ War Machine</p>
                            </div>
                          </div>
                          {/* <!-- //== --> */}
                          <div className="title-hd-sm">
                            <h4>Produced by</h4>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>VA</h4>
                                <a href="#">Victoria Alonso</a>
                              </div>
                              <p>... executive producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>MB</h4>
                                <a href="#">Mitchel Bell</a>
                              </div>
                              <p>... co-producer (as Mitch Bell)</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JC</h4>
                                <a href="#">Jamie Christopher</a>
                              </div>
                              <p>... associate producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>LD</h4>
                                <a href="#">Louis D’Esposito</a>
                              </div>
                              <p>... executive producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JF</h4>
                                <a href="#">Jon Favreau</a>
                              </div>
                              <p>... executive producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>KF</h4>
                                <a href="#">Kevin Feige</a>
                              </div>
                              <p>... producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>AF</h4>
                                <a href="#">Alan Fine</a>
                              </div>
                              <p>... executive producer</p>
                            </div>
                            <div className="cast-it">
                              <div className="cast-left">
                                <h4>JF</h4>
                                <a href="#">Jeffrey Ford</a>
                              </div>
                              <p>... associate producer</p>
                            </div>
                          </div>
                        </div>
                      </div>









                      <div id="media" className={"tab" + openTab === 4 ? "active" : "hidden"}>
                        <div className="row">
                          <div className="rv-hd">
                            <div>
                              <h3>Videos & Photos of</h3>
                              <h2>The Big Bang Theory</h2>
                            </div>
                          </div>
                          <div className="title-hd-sm">
                            <h4>Videos <span>(8)</span></h4>
                          </div>
                          <div className="mvsingle-item media-item">
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item1.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Trailer: Watch New Scenes</a></h6>
                                <p className="time"> 1: 31</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item2.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Featurette: “Avengers Re-Assembled</a></h6>
                                <p className="time"> 1: 03</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item3.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Interview: Robert Downey Jr</a></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item4.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Interview: Scarlett Johansson</a></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item1.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Featurette: Meet Quicksilver & The Scarlet
                                  Witch</a></h6>
                                <p className="time"> 1: 31</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item2.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Interview: Director Joss Whedon</a></h6>
                                <p className="time"> 1: 03</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item3.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Interview: Mark Ruffalo</a></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                            <div className="vd-item">
                              <div className="vd-it">
                                <img className="vd-img" src={process.env.PUBLIC_URL + "images/uploads//vd-item4.jpg"} alt="" />
                                <a className="fancybox-media hvr-grow"
                                  href="https://www.youtube.com/embed/o-0hcF97wy0"><img
                                    src={process.env.PUBLIC_URL + "images/uploads/play-vd.png"} alt="" /></a>
                              </div>
                              <div className="vd-infor">
                                <h6> <a href="#">Official Trailer #2</a></h6>
                                <p className="time"> 3:27</p>
                              </div>
                            </div>
                          </div>
                          <div className="title-hd-sm">
                            <h4>Photos <span> (21)</span></h4>
                          </div>
                          <div className="mvsingle-item">
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image11.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image1.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image21.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image2.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image31.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image3.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image41.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image4.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image51.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image5.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image61.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image6.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image71.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image7.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image81.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image8.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image91.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image9.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image101.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image10.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image111.jpg"><img
                                src={process.env.PUBLIC_URL + "images/uploads/image1-1.jpg"} alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image121.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image12.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image131.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image13.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image141.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image14.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image151.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image15.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image161.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image16.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image171.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image17.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image181.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image18.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image191.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image19.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image201.jpg"><img src={process.env.PUBLIC_URL + "images/uploads/image20.jpg"
                              } alt="" /></a>
                            <a className="img-lightbox" data-fancybox-group="gal/lery"
                              href="images/uploads/image211.jpg"><img
                                src={process.env.PUBLIC_URL + "images/uploads/image2-1.jpg"} alt="" /></a>
                          </div>
                        </div>
                      </div>







                      <div id="season" className={"tab" + openTab === 5 ? "active" : "hidden"}>
                        <div className="row">
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mvcast-item">
                            <div className="cast-it">
                              <div className="cast-left series-it">
                                <img src={process.env.PUBLIC_URL + "images/uploads/season.jpg"} alt="" />
                                <div>
                                  <a href="#">Season 10</a>
                                  <p>21 Episodes</p>
                                  <p>Season 10 of The Big Bang Theory premiered on
                                    September 19, 2016.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>






                      <div id="moviesrelated" className={"tab" + openTab === 6 ? "active" : "hidden"}>
                        <div className="row">
                          <h3>Related Movies To</h3>
                          <h2>Skyfall: Quantum of Spectre</h2>
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
                          <div className="movie-item-style-2">
                            <img src={process.env.PUBLIC_URL + "images/uploads/mv1.jpg"} alt="" />
                            <div className="mv-item-infor">
                              <h6><a href="#">oblivion <span>(2012)</span></a></h6>
                              <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                              <p className="describe">Earth's mightiest heroes must come together and
                                learn to fight as a team if they are to stop the mischievous Loki
                                and his alien army from enslaving humanity...</p>
                              <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
                                <span>Release: 1 May 2015</span></p>
                              <p>Director: <a href="#">Joss Whedon</a></p>
                              <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris
                                Evans,</a> <a href="#"> Chris Hemsworth</a></p>
                            </div>
                          </div>
                          <div className="movie-item-style-2">
                            <img src={process.env.PUBLIC_URL + "images/uploads/mv2.jpg"} alt="" />
                            <div className="mv-item-infor">
                              <h6><a href="#">into the wild <span>(2014)</span></a></h6>
                              <p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
                              <p className="describe">As Steve Rogers struggles to embrace his role in the
                                modern world, he teams up with a fellow Avenger and S.H.I.E.L.D
                                agent, Black Widow, to battle a new threat...</p>
                              <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
                                <span>Release: 1 May 2015</span></p>
                              <p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe Russo</a></p>
                              <p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel L.
                                Jackson,</a> <a href="#"> Scarlett Johansson</a></p>
                            </div>
                          </div>
                          <div className="movie-item-style-2">
                            <img src={process.env.PUBLIC_URL + "images/uploads/mv3.jpg"} alt="" />
                            <div className="mv-item-infor">
                              <h6><a href="#">blade runner <span>(2015)</span></a></h6>
                              <p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
                              <p className="describe">Armed with a super-suit with the astonishing ability
                                to shrink in scale but increase in strength, cat burglar Scott Lang
                                must embrace his inner hero and help...</p>
                              <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
                                <span>Release: 1 May 2015</span></p>
                              <p>Director: <a href="#">Peyton Reed</a></p>
                              <p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a>
                              </p>
                            </div>
                          </div>
                          <div className="movie-item-style-2">
                            <img src={process.env.PUBLIC_URL + "images/uploads/mv4.jpg"} alt="" />
                            <div className="mv-item-infor">
                              <h6><a href="#">Mulholland pride<span> (2013) </span></a></h6>
                              <p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
                              <p className="describe">When Tony Stark's world is torn apart by a
                                formidable terrorist called the Mandarin, he starts an odyssey of
                                rebuilding and retribution.</p>
                              <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
                                <span>Release: 1 May 2015</span></p>
                              <p>Director: <a href="#">Shane Black</a></p>
                              <p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#"> Guy
                                Pearce,</a><a href="#">Don Cheadle</a></p>
                            </div>
                          </div>
                          <div className="movie-item-style-2">
                            <img src={process.env.PUBLIC_URL + "images/uploads/mv5.jpg"} alt="" />
                            <div className="mv-item-infor">
                              <h6><a href="#">skyfall: evil of boss<span> (2013) </span></a></h6>
                              <p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
                              <p className="describe">When Tony Stark's world is torn apart by a
                                formidable terrorist called the Mandarin, he starts an odyssey of
                                rebuilding and retribution.</p>
                              <p className="run-time"> Run Time: 2h21’ . <span>MMPA: PG-13 </span> .
                                <span>Release: 1 May 2015</span></p>
                              <p>Director: <a href="#">Alan Taylor</a></p>
                              <p>Stars: <a href="#">Chris Hemsworth, </a> <a href="#"> Natalie
                                Portman,</a><a href="#">Tom Hiddleston</a></p>
                            </div>
                          </div>
                          <div className="topbar-filter">
                            <label>Movies per page:</label>
                            <select>
                              <option value="range">5 Movies</option>
                              <option value="saab">10 Movies</option>
                            </select>
                            <div className="pagination2">
                              <span>Page 1 of 2:</span>
                              <a className="active" href="#">1</a>
                              <a href="#">2</a>
                              <a href="#"><i className="ion-arrow-right-b"></i></a>
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
        </div>
      </div>
    </>
  )
}
