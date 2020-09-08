import React from "react";



const OneDish = ({dish, getDish}) => {
  return (
    <div onClick={() => getDish(dish)}> {dish} </div>
  );
}

export default OneDish
