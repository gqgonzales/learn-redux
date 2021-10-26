import counterReducer from "./counter.js";
import loggedReducer from "./isLogged.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isAuthenticated: loggedReducer,
});

export default rootReducer;
