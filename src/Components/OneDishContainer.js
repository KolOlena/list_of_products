import React from "react";
import OneDish from "./OneDish";
import { printIngredientActionCreator } from "../dishesReducer";
import StoreContext from "../StoreContext";

const OneDishContainer = ({dish}) => {
  return <StoreContext.Consumer>
    {store => {
      let getDish = (dishToIngredients) => {
        store.dispatch(printIngredientActionCreator(dishToIngredients));
      }
      return <OneDish dish={dish} getDish={getDish}/>
    }}
  </StoreContext.Consumer>
}

export default OneDishContainer
