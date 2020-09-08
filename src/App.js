import React from "react";
import {BrowserRouter} from "react-router-dom";
import DishesContainer from "./Components/DishesContainer";
import ProductListContainer from "./Components/ProductListContainer";

const App = ({state, dispatch}) => {
  debugger
    return (
        <BrowserRouter>
            <div>
                <DishesContainer state={state} dispatch={dispatch}/>
                <ProductListContainer productList={state.dishes.ingredientsArray}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
