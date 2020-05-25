import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initialStateData = {
  news: [],
};

const dataReducer = (initialStateData = [], action) => {
  switch (action.type) {
    default:
      return initialStateData;
  }
};

const reducer = combineReducers({
  data: dataReducer,
});

export default (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
