import React from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";

const ProductListContainer = ({productList}) => {
  let shopList = productList.map(function(ingredientsItem) {
    return (<ProductItem ingredientsItem={ingredientsItem}/>)
  })

  return <ProductList shopList = {shopList} />
}

export default ProductListContainer;
