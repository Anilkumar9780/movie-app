import React from 'react';

// package
import { ToastContainer } from 'react-toastify';

//styles
import './css/plugins.css';
import './css/style.css';

//package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component
import { MovieCard } from './Movie/Movies';
import { Footer } from './Footer/Footer';
import { NavBar } from './NavBar/NavBar';

export const App = () => {
    return (
        <div>
            <NavBar />
            <MovieCard />
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

