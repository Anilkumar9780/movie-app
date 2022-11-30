import React, { useState } from 'react';

//components
import { Home, Footer, NavBar, NotFoundPage } from '../components';
import { MovieDetails } from '../Pages'
import { GET_SERACH_LIST } from '../Service/Service';

//packages
import { Routes, Route, } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const Router = () => {
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
        try {
            const { data } = await GET_SERACH_LIST(mediaType, searchMovies);
            setMovieList(data.results);
            navigate('/search');
        } catch (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        setSearchMovies('')
    };

    return (
        <>
            <NavBar
                handleSelectOnchange={handleSelectOnchange}
                handlesearch={handlesearch}
                mediaType={mediaType}
                setSearchMovies={setSearchMovies}
                setMediaType={setMediaType}
            />
            {/* <Home movieList={movieList} handlesearch={handlesearch} /> */}
            <Routes>
                <Route exact path='/' element={<Home movieList={movieList} handlesearch={handlesearch} />} />
                <Route exact path='/moviedetails/:movie_id' element={<MovieDetails />} />
                <Route path='*' exact={true} element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}
