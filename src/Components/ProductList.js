import React from "react";


const ProductList = ({shopList}) => {
  return (
    <div>
      <div>Need to by:</div>
      <div>{shopList}</div>
    </div>
  );
}

export default ProductList;
