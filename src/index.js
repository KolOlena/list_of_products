// import './index.css';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state, { subscribe } from './state'
import {printIngredient} from './state'


let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} printIngredient={printIngredient}/>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireThree(state);

subscribe(rerenderEntireThree);





