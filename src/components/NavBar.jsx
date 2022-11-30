import React, { useState, useEffect } from 'react';

// images
import img from '../img/logo1.png';
import img1 from '../img/uploads/topsearch.png';

// package 
import { Link, NavLink } from 'react-router-dom';

//style
import '../css/NavBar.css'

//package ui
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

const NavBar = ({
  //props
  searchMovies,
  setSearchMovies,
  mediaType,
  handleSelectOnchange,
  handlesearch
}) => {
  //state
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [scroll, setScroll] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  /**
   * open modal login page
   */
  const handleClickLogin = () => {
    setOpens(true);
  };

  /**
   * open modal sign up page
   */
  const handleClicksignUp = () => {
    setOpen(true);
  };

  /**
   * hadle close modal
   */
  const handleClose = () => {
    setOpen(false);
    setOpens(false);
  };

  /**
   * on scroll fixed navbar
   */
  useEffect(() => {
    window.onscroll = () => {
      setSticky(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  /**
   * progress bar scroll
   */
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <>
      {/* Login page modal */}
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
                    <NavLink href="#" onClick={handleClose} className="close">x</NavLink >
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
      {/* sign up page modal */}
      <Modal
        open={open}
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
                    <NavLink onClick={handleClose} className="close">x</NavLink >
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
      {/* header page */}
      <header className={` ht-header ${sticky ? 'sticky' : ''}`}>
        <div className="progressBarContainer">
          <div className="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
        </div>
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
              <NavLink href="index-2.html"><img className="logo" src={img} alt="" width="119" height="58" /></NavLink >
            </div>
            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="dropdown first">
                  <Link to="/" >
                    Home
                  </Link >
                </li>
                <li className="dropdown first">
                  <NavLink className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    movies
                  </NavLink >
                  <ul className="dropdown-menu level1">
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/trending">Trending Movies</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <NavLink className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    Tv Show
                  </NavLink >
                  <ul className="dropdown-menu level1">
                    <li><Link to='/tvshow'>Tv Series</Link></li>
                    <li><Link to='/trending'>Trending Tv Series</Link></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <NavLink className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    news
                  </NavLink >
                  <ul className="dropdown-menu level1">
                    <li><NavLink href="bloglist.html">blog </NavLink ></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <NavLink className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                    community
                  </NavLink >
                  <ul className="dropdown-menu level1">
                    <li><Link to="/not">user favorite </Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li><NavLink href="#">Help</NavLink ></li>
                <li className="btn loginLink"><NavLink onClick={handleClickLogin}>LOG In</NavLink ></li>
                <li className="btn signupLink"><NavLink onClick={handleClicksignUp}>sign up</NavLink ></li>
              </ul>
            </div>
          </nav>
          {/* search bar */}
          <div className="top-search">
            <select onChange={handleSelectOnchange} value={mediaType}>
              <option value="movie">TV show</option>
              <option value="tv">Movies</option>
            </select>
            <input
              onChange={e => setSearchMovies(e.target.value)}
              value={searchMovies}
              type="text"
              placeholder="Search for NavLink  movie, TV Show or celebrity that you are looking for" />
            <button className="btn btn-outline-dark" onClick={handlesearch} type="submit"><img src={img1} alt={img1}></img></button>
          </div>
        </div>
      </header>

    </>
  )
}

export default NavBar;