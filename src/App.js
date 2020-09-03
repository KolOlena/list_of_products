import React from "react";
import Dishes from "./Components/Dishes";
import ProductList from "./Components/ProductList";
import {BrowserRouter} from "react-router-dom";

const App = ({state, printDish}) => {
    return (
        <BrowserRouter>
            <div>
                <Dishes state={state} printDish={printDish}/>
                <ProductList list={state.productList} printDish={printDish}/>
                {/*<ProductList/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;