import React from "react";

const OneDish = ({dish, printIngredient}) => {

  let getDish = (dishToIngredients) => {
    printIngredient(dishToIngredients);
  }

  return (
    <div onClick={() => getDish(dish)}> {dish} </div>
  );
}

export default OneDish
