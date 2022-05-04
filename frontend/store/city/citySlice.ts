import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../index";
import { CityState, City } from "./types";
import { Platform } from "react-native";

let baseURL: string | null = null;
Platform.OS === "android"
  ? (baseURL = "http://10.0.2.2:4000")
  : (baseURL = "http://localhost:4000");

const initialState: CityState = {
  city: {},
  errorMessage: "",
  loading: false,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<City>) => {
      state.loading = false;
      state.city = payload;
    },
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const getCity = (searchWord: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const url = `${baseURL}/rest/city/${searchWord}`;
    try {
      const { data } = await axios.get(url);
      dispatch(setCity(data));
    } catch (error) {
      dispatch(setErrorMessage("Something went wrong.."));
    }
  };
};

export const { setCity, setErrorMessage, setLoading } = citySlice.actions;

export const citySelector = (state: { cityReducer: CityState }) =>
  state.cityReducer;

export default citySlice.reducer;
