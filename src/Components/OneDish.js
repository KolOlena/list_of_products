import React from "react";

const OneDish = ({dish, printDish}) => {

    let getDish = (key) => {
        let text = key;
        printDish(text);
    }

    return (
        <div onClick={()=>getDish(dish)} > {dish} </div>
    );
}

export default OneDish
