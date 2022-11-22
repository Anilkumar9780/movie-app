import React from 'react';

//styles
import './css/plugins.css';
import './css/style.css';

// Component
import { Home } from './components/Home/Home';
import { Message } from './PopMessage/Message';
import { Details } from './Pages/MovieDetail/Details';

//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/detalis' element={<Details />} />
                </Routes>
            </BrowserRouter>
            <Home />
            <Message />
        </div>
    );
}

