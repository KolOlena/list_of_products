import React from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import StoreContext from "../StoreContext";

const ProductListContainer = () => {
  return <StoreContext.Consumer>
    {store => {
      let state = store.getState();
      let shopList = state.dishes.ingredientsArray.map(function (ingredientsItem) {
        return (<ProductItem ingredientsItem={ingredientsItem}/>)
      })

      return <ProductList shopList={shopList}/>
    }
    }
  </StoreContext.Consumer>
}

export default ProductListContainer;
