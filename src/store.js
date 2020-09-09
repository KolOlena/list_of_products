import dishesReducer from "./dishesReducer";

let store = {
  _state: {
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
  },

  _callSubscriber(){},
  getState(){
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state = dishesReducer(this._state, action);
    this._callSubscriber(this._state)
  },
}


export default store;
