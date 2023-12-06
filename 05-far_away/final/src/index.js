import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppCards from "./flash_card/AppCards";
import CounterV2 from "./counter_v2/Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<AppCards/>*/}
        <CounterV2/>
    </React.StrictMode>
);
