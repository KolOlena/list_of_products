import React from "react";
import OneDish from "./OneDish";
import ProductList from "./ProductList";

const Dishes = ({state: {dishes, productList}, printDish}) => {
    // let printIngridients = (key) => {
    //     Object.keys(dishes).forEach((k) => {
    //             if (key === k) {
    //                 console.log(dishes[key])
    //                 productList = dishes[key].map((ing) => <ProductList ing={ing} />)
    //             }
    //         }
    //     )
    // }


    let dishesPoint = Object.keys(dishes).map((dish) => <OneDish dish={dish} printDish={printDish} productList={productList}/>)


    return (
        <div>
        <div>Select what you want to cook</div>
            {dishesPoint}
        </div>
    );
}

export default Dishes