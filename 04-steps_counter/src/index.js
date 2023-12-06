import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./counter_v1/Counter";
import CounterV2 from "./counter_v2/Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<Counter/>*/}
        {/*<App />*/}
        <CounterV2/>
    </React.StrictMode>
);

