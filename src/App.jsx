import React from 'react';

//styles
import './css/plugins.css';
import './css/style.css';

// Component
import { HomeRouter } from './Router/HomeRouter';
import { Message } from './components/PopMessage/Message';

export const App = () => {
    return (
        <div>
            <HomeRouter />
            <Message />
        </div>
    );
}

