import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({productList}) => {
  let shopList = productList.map(function(ingredientsItem) {
    return (<ProductItem ingredientsItem={ingredientsItem}/>)
  })

  return (
    <div>
      <div>Need to by:</div>
      <div>{shopList}</div>
    </div>
  );
}

export default ProductList;
