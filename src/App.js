import React from "react";
import {BrowserRouter} from "react-router-dom";
import DishesContainer from "./Components/DishesContainer";
import ProductListContainer from "./Components/ProductListContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <DishesContainer />
                <ProductListContainer />
            </div>
        </BrowserRouter>
    )
}

export default App;
