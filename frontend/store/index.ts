import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import cityReducer from "./city/citySlice";
import countryReducer from "./country/countrySlice";
import errorReducer from "./errorHandler/errorSlice";

export type AppThunk = ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
>;

const reducer = combineReducers({
  cityReducer,
  countryReducer,
  errorReducer
});
const store = configureStore({
  reducer,
});

export default store;
