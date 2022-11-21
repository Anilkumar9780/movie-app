import React from 'react';

//styles
import './css/plugins.css';
import './css/style.css';

//package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
import { Home } from './components/Home/Home';
import { Message } from './PopMessage/Message';
import { Movies } from './Pages/Movies/Movies';
import { Trending } from './Pages/Trending/Trending';
import { TvShow } from './Pages/TVShow/Tvshow';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="trending" element={<Trending />} />
                    <Route path="tvshow" element={<TvShow />} />
                </Routes>
            </BrowserRouter>
            <Message />
        </div>
    );
}

