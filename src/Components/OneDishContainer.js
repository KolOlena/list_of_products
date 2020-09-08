import React from "react";
import OneDish from "./OneDish";
import { printIngredientActionCreator } from "../dishesReducer";



const OneDishContainer = ({dish, dispatch}) => {

  let getDish = (dishToIngredients) => {
    dispatch(printIngredientActionCreator(dishToIngredients));
  }
  return <OneDish dish={dish} getDish={getDish}/>
}

export default OneDishContainer
