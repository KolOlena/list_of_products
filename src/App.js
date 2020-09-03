import React from "react";
import Dishes from "./Components/Dishes";
import ProductList from "./Components/ProductList";
import {BrowserRouter} from "react-router-dom";

const App = ({state, printIngredient}) => {
    return (
        <BrowserRouter>
            <div>
                <Dishes state={state} printIngredient={printIngredient}/>
                <ProductList productList={state.ingredientsArray}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
