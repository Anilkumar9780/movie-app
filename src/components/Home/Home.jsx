/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';

//component
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { Routers } from '../../Routing/Router';
import { MovieDetails } from '../../Pages/MovieDetail/Details';
import { GET_SERACH_LIST } from '../../Service/Service';

// package
import { toast } from 'react-toastify';
import { BrowserRouter ,useNavigate, Routes, Route } from "react-router-dom";

//images
import img from '../../img/logo1.png'
import { Listing } from '../DisplayCard/Listing';

export const Home = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [mediaType, setMediaType] = useState();
  const navigate = useNavigate();

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
    setLoading(true);
    try {
      const { data } = await GET_SERACH_LIST(mediaType, searchMovies);
      setMovieList(data.results);
      navigate('/search');
      setLoading(false);
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    setSearchMovies('')
  };

  return (
    <Fragment>
      <NavBar
        handleSelectOnchange={handleSelectOnchange}
        handlesearch={handlesearch}
        mediaType={mediaType}
        setSearchMovies={setSearchMovies}
        setMediaType={setMediaType}
      />
      <Routes>
        <Route exact path='/moviedetails/:movie_id' element={<MovieDetails />} />
        <Route exact path='/' element={<Routers
          movieList={movieList}
          handlesearch={handlesearch} />} />
      </Routes>
      <Footer />
      {/* <Listing /> */}
      {loading &&
        <div id="preloader">
          <img class="logo" src={img} alt="" width="119" height="58" />
          <div id="status">
            <span></span>
            <span></span>
          </div>
        </div>
      }
    </Fragment>
  )
}