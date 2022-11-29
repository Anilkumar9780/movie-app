import React, { useState } from 'react';

//components
import { Home } from '../components/Home/Home';
import { MovieDetails } from '../Pages/MovieDetail/Details';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { GET_SERACH_LIST } from '../Service/Service';

//packages
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const HomeRouter = () => {
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
            {/* <Routes>
                <Route exact path='/moviedetails/:movie_id' element={<MovieDetails />} />
                <Route path='*' exact={true} element={<NotFoundPage />} />
                <Route path='/' exact={true} element={<Home movieList={movieList} handlesearch={handlesearch} />} />
            </Routes> */}
            <Home movieList={movieList} handlesearch={handlesearch} />
            <Footer />
        </>
    )
}
