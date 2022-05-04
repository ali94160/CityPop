import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cityReducer from "./city/citySlice";
import countryReducer from "./country/countrySlice";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

export type AppThunk = ThunkAction<
  void,
  RootStateOrAny,
  unknown,
  Action<string>
>;

const reducer = combineReducers({
  cityReducer,
  countryReducer,
});
const store = configureStore({
  reducer,
});

export default store;
