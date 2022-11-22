/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

// images
import img from '../../img/logo1.png';
import img1 from '../../img/uploads/topsearch.png';

// package
import { toast } from 'react-toastify';

//component
import { GET_SERACH_LIST } from '../../Service/Service';
import { Link } from 'react-router-dom';

export const NavBar = ({
  // props
  setMovieList,
}) => {
  // states
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
      <header className="ht-header ">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a href="index-2.html"><img className="logo" src={img} alt="" width="119" height="58" /></a>
            </div>
            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                    Home
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><Link to="/" href="index-2.html">Home</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    movies
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><Link to="/" href="movielist.html">Movies</Link></li>
                    <li><Link to="/trending" href="movielist.html">Trending Movies</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    Tv Show
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><Link to='/tvshow'>Tv Series</Link></li>
                    <li><Link to='/trending'>Trending Tv Series</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    news
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><a href="bloglist.html">blog </a></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    community
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><a href="userfavoritegrid.html">user favorite </a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li><a href="#">Help</a></li>
                <li className="loginLink"><a href="#">LOG In</a></li>
                <li className="btn signupLink"><a href="#">sign up</a></li>
              </ul>
            </div>
          </nav>
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
            <button className="btn btn-outline-dark" onClick={handlesearch} type="submit"><img src={img1} alt={img1} ></img></button>
          </div>
        </div>
      </header>
      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1> movie listing - grid</h1>
                <ul className="breadcumb">
                  <li className="active"><a href="#">Home</a></li>
                  <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
