import { createStore, applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// creo el store de redux pasandole el reducer
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    )

export default store