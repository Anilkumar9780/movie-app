import React from 'react';

//styles
import './css/plugins.css';
import './css/style.css';

// Component
import { Home } from './components/Home/Home';
import { Message } from './PopMessage/Message';
import Tab from './Pages/MovieDetail/Tab'

export const App = () => {
    return (
        <div>
            <Home />
            <Tab />
            <Message />
        </div>
    );
}

