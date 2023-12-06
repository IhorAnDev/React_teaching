import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppCards from "./flash_card/AppCards";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        <AppCards/>
    </React.StrictMode>
);
