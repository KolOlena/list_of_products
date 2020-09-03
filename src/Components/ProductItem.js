import React from "react";

const ProductItem = ({ingredientsItem: {name, count, measure}}) => {
  return (
    <div>{name} {count} {measure}</div>
  );
}

export default ProductItem
