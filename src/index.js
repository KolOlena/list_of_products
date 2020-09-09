import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux-store'
import React from 'react';
import StoreContext from "./StoreContext";


let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});





