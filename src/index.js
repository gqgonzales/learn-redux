import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

// Remember, Redux makes me SADR:

// STORE is globalized state.
// Import {createStore} from ‘redux’

// ACTION describes what you want to do. Function that returns an object

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// REDUCER checks which action you performed and modifies Store accordingly.
// const counter = (state = 0, action) => {
// eslint-disable-next-line default-case
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// DISPATCH executes an action to the reducer.
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
