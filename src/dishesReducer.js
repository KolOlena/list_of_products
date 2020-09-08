const PRINT_INGREDIENT = 'PRINT-INGREDIENT'


let initialState = {
  dishes: {
    'borsh': [
        {name: 'kapusta', count: 1, measure: 'kg'},
        {name: 'meat', count: 1, measure: 'kg'},
        {name: 'kartoshka', count: 6, measure: 'sht'},
      ],
    'plof': [
        {name: 'rise', count: 0.5, measure: 'kg'},
        {name: 'meat', count: 0.5, measure: 'kg'},
        {name: 'morkovks', count: 6, measure: '2'},
      ]
  },
  ingredientsArray: []
}

 const dishesReducer = (state = initialState, action) => {
  if (action.type === PRINT_INGREDIENT) {
    Object.keys(state.dishes).forEach((dish) => {
        if (dish === action.dishName) {
          state.dishes[action.dishName]
            .map((ingredientItem) => state.ingredientsArray.push(ingredientItem))
        }
        console.log(state.ingredientsArray);
      }
    )
  }
  return state;
}

export const printIngredientActionCreator = (dishToIngredients) => {
  debugger
  return {
    type: PRINT_INGREDIENT,
    dishName: dishToIngredients
  }
}

export default dishesReducer;
