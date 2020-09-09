import React from "react";
import OneDishContainer from "./OneDishContainer";
import Dishes from "./Dishes";
import StoreContext from "../StoreContext";

const DishesContainer = () => {
  return <StoreContext.Consumer>
    {store => {
      let state = store.getState();
      let dishesPoint = Object.keys(state.dishes.dishes)
        .map((dish) =>
          <OneDishContainer dish={dish}/>)

      return <Dishes dishesPoint={dishesPoint}/>
    }
    }
  </StoreContext.Consumer>
}

export default DishesContainer
