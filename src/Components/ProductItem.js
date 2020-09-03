import React from "react";

const ProductItem = ({ingredientsItem: {name, count, metrick}}) => {
  return (
    <div>{name} {count} {metrick}</div>
  );
}

export default ProductItem
