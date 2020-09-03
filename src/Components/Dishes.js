import React from "react";
import OneDish from "./OneDish";
import ProductList from "./ProductList";

const Dishes = ({state: {dishes, ingredientsArray}, printIngredient}) => {

    let dishesPoint = Object.keys(dishes).
    map((dish) =>
      <OneDish
        dish={dish}
        printIngredient={printIngredient}
        ingredientsArray={ingredientsArray}/>)

    return (
        <div>
        <div>Select what you want to cook:</div>
            {dishesPoint}
        </div>
    );
}

export default Dishes
