import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { getNews } from "./API/api";

export const fetchNewsData = (queryStr, PageNo) => (dispatch) =>
  getNews(queryStr, PageNo).then((res) => {
    dispatch(storeNewsData(res.hits));
  });

export const upDateNumber = () => {
  return {
    type: "INC"
  }
}

// Action Creator
const storeNewsData = (payload) => {
  return {
    type: "FETCH_DATA",
    payload,
  };
};

const dataReducer = (news = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return news;
  }
};

const counter = (count = 20, action) => {
  switch (action.type) {
    case "INC":
      console.log("clicked");
      return count + 1;
    default:
      return count;
  }
};

const reducer = combineReducers({
  data: dataReducer,
  counter: counter,
});

export default (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
