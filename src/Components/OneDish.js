import React from "react";

const OneDish = ({dish, printDish, productList}) => {

    let getDish = (key) => {
        let text = key;
        printDish(text);
        console.log(productList)
    }

    return (
        <div onClick={()=>getDish(dish)} > {dish} </div>
    );
}

export default OneDish