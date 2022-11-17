/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// images
import img from '../img/logo1.png';

// style
import '../css/plugins.css';
import '../css/style.css';

export const NavBar = () => {
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
                                        <li><a href="index-2.html">Home 01</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        movies
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid</a>
                                            <ul className="dropdown-menu level2">
                                                <li><a href="moviegrid.html">Movie grid</a></li>
                                                <li><a href="moviegridfw.html">movie grid full width</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="movielist.html">Movie list</a></li>
                                        <li><a href="moviesingle.html">Movie single</a></li>
                                        <li className="it-last"><a href="seriessingle.html">Series single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        celebrities
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                                        <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                                        <li><a href="celebritylist.html">celebrity list</a></li>
                                        <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        news
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="bloglist.html">blog List</a></li>
                                        <li><a href="bloggrid.html">blog Grid</a></li>
                                        <li className="it-last"><a href="blogdetail.html">blog Detail</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        community
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                                        <li><a href="userfavoritelist.html">user favorite list</a></li>
                                        <li><a href="userprofile.html">user profile</a></li>
                                        <li className="it-last"><a href="userrate.html">user rate</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        pages
                                    </a>
                                    <ul className="dropdown-menu level1">
                                        <li><a href="landing.html">Landing</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Help</a></li>
                                <li className="loginLink"><a href="#">LOG In</a></li>
                                <li className="btn signupLink"><a href="#">sign up</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="top-search">
                        <select>
                            <option value="united">TV show</option>
                            <option value="saab">Others</option>
                        </select>
                        <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
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