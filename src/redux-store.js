import { combineReducers, createStore } from "redux";
import dishesReducer from "./dishesReducer";

let reducers = combineReducers({
  dishes: dishesReducer});

let store = createStore(reducers);

export default store;

