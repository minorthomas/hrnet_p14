import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { UsersProvider } from './utils/Context/index.jsx';

ReactDOM.createRoot(document.querySelector('.app')).render(
    <React.StrictMode>
        <UsersProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UsersProvider>
    </React.StrictMode>
);
