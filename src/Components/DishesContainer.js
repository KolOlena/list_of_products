import React from "react";
import OneDishContainer from "./OneDishContainer";
import Dishes from "./Dishes";

const DishesContainer = ({state: {dishes:{dishes, ingredientsArray}}, dispatch}) => {
    let dishesPoint = Object.keys(dishes)
      .map((dish) =>
      <OneDishContainer
        dish={dish}
        dispatch={dispatch}
        ingredientsArray={ingredientsArray}/>)

    return <Dishes dishesPoint={dishesPoint}/>
}

export default DishesContainer
