/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

// images
import img from '../../img/logo1.png';
import img1 from '../../img/uploads/topsearch.png';

// package router-dom
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//packages ui
import Modal from '@mui/material/Modal';

export const NavBar = ({
  searchMovies,
  setSearchMovies,
  mediaType,
  handleSelectOnchange,
  handlesearch
}) => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickLogin = () => {
    setOpens(true);
  };

  const handleClicksignUp = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpens(false);
  };

  return (

    <>
      <Modal
        open={opens}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <section className="vh" style={{ marginTop: "200px" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">
                    <a href="#" onClick={handleClose} className="close">x</a>
                    <h3 className="mb-5">Login</h3>
                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" placeholder='Email' className="form-control form-control-lg" />
                      <label className="form-label" for="typeEmailX-2"></label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" placeholder='Password' className="form-control form-control-lg" />
                      <label className="form-label" for="typePasswordX-2"></label>
                    </div>
                    <div className="form-check d-flex justify-content-start mb-5">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label className="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    <hr className="my-4" />
                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
                      type="submit"><i className="fa fa-google me-2"></i> Sign in with google</button>
                    <button className="btn btn-lg btn-block btn-primary mb-3" style={{ backgroundColor: "#3b5998" }}
                      type="submit"><i className="fa fa-facebook me-3"></i> Sign in with facebook</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <section className="vh" style={{ marginTop: "200px"}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">
                    <a href="#" onClick={handleClose} className="close">x</a>
                    <h3 className="mb-5">Sign Up</h3>
                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" placeholder='Full Name' className="form-control form-control-lg" />
                      <label className="form-label" for="typeEmailX-2"></label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" placeholder='Email' className="form-control form-control-lg" />
                      <label className="form-label" for="typeEmailX-2"></label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" placeholder='Password' className="form-control form-control-lg" />
                      <label className="form-label" for="typePasswordX-2"></label>
                    </div>
                    <div className="form-check d-flex justify-content-start mb-5">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label className="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">sign up</button>
                    <hr className="my-4" />
                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }}
                      type="submit"><i className="fa fa-google me-2"></i> sign up with google</button>
                    <button className="btn btn-lg btn-block btn-primary mb-3" style={{ backgroundColor: "#3b5998" }}
                      type="submit"><i className="fa fa-facebook me-3"></i> sign up with facebook</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
      
      <header className="ht-header">
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
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    Home
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><Link to="/">Home</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    movies
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/trending">Trending Movies</Link></li>
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
                <li className="btn loginLink"><a onClick={handleClickLogin}>LOG In</a></li>
                <li className="btn signupLink"><a onClick={handleClicksignUp}>sign up</a></li>
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
              placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
            <button className="btn btn-outline-dark" onClick={handlesearch} type="submit"><img src={img1} alt={img1}></img></button>
          </div>
        </div>
      </header>
    </>
  )
}
