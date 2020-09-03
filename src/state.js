let rerenderEntireThree;

let state = {
  dishes: {
    'borsh':
      [
        {name: 'kapusta', count: 1, measure: 'kg'},
        {name: 'meat', count: 1, measure: 'kg'},
        {name: 'kartoshka', count: 6, measure: 'sht'},
      ],
    'plof':
      [
        {name: 'rise', count: 0.5, measure: 'kg'},
        {name: 'meat', count: 0.5, measure: 'kg'},
        {name: 'morkovks', count: 6, measure: '2'},
      ]
  },
  ingredientsArray: []
}

export let printIngredient = (dishItem) => {
  Object.keys(state.dishes).forEach((dish) => {
      if (dish === dishItem) {
        state.dishes[dishItem].
        map((ingredientItem) => state.ingredientsArray.push(ingredientItem))
      }
      console.log(state.ingredientsArray);
    }
  )
  rerenderEntireThree(state)
}

export const subscribe = (observer) => {
  rerenderEntireThree = observer;
  console.log(rerenderEntireThree);
}


export default state;
