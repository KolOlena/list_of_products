let rerenderEntireThree = () => {
  // console.log('State is changed')
}

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

export const subscribe = (observer) => {
  rerenderEntireThree = observer;
}


export default state;
