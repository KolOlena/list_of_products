import React from "react";
import {rerenderEntireTree} from "../index";

const ProductList = ({list, printDish}) => {
    return (
        <div>
        <div>Need to by:</div>
            <div>{list}</div>
            {/*<div> Продукт {name}</div>*/}
            {/*<div> Количество {count}</div>*/}
            {/*<div> Чего {metrick}</div>*/}
        </div>
    );
}

export default ProductList