import {rerenderEntireThree} from "./render";

let state = {
    dishes: {
        'borsh':
            [
                {name: 'kapusta', count: 1, metrick: 'kg'},
                {name: 'meat', count: 1, metrick: 'kg'},
                {name: 'kartoshka', count: 6, metrick: 'sht'},
            ],
        'plof':
            [
                {name: 'rise', count: 0.5, metrick: 'kg'},
                {name: 'meat', count: 0.5, metrick: 'kg'},
                {name: 'morkovks', count: 6, metrick: '2'},
            ]
    },
    productList: []
}

export let printDish = (dishItem) => {
    state.productList.push(dishItem);
    rerenderEntireThree(state)
}


export default state;