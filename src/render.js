// import './index.css';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state from './state'
import {printDish} from './state'


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} printDish={printDish}/>
        </BrowserRouter>, document.getElementById('root')
    );
}





