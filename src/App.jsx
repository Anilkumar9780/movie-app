import React from 'react';

// package
import { ToastContainer } from 'react-toastify';

//styles
import './css/plugins.css';
import './css/style.css';

// Component
import { MovieCard } from './Movie/Movies';

export const App = () => {
    return (
        <div>
            <MovieCard />
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

