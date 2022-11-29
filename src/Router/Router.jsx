import React from 'react';

//components
import { Movies } from '../Pages/Movies/Movies';
import { Trending } from '../Pages/Trending/Trending';
import { TvShow } from '../Pages/TVShow/Tvshow';
import { Search } from '../Pages/Search/Search';

//packages
import { Routes, Route } from "react-router-dom";

export const Router = ({
    handlesearch,
    movieList
}) => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Movies />} />
                <Route path='/trending' exact element={<Trending />} />
                <Route path='/tvshow' exact element={<TvShow />} />
                <Route path='/search' exact element={<Search movieList={movieList} handlesearch={handlesearch} />} />
            </Routes>
        </>
    )
}
