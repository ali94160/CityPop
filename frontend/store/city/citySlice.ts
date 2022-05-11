import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../index";
import { CityState, City } from "./types";
import { Platform } from "react-native";
import { setErrorMessage, setOpenSnackbar } from "../errorHandler/errorSlice";

let baseURL: string | null = null;
Platform.OS === "android"
  ? (baseURL = "http://10.0.2.2:4000")
  : (baseURL = "http://localhost:4000");

const initialState: CityState = {
  city: null,
  loading: false,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<City | null>) => {
      state.loading = false;
      state.city = payload;
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
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch(setCity(response.data));
        return;
      }
      dispatch(setErrorMessage("Something went wrong.."));
      dispatch(setOpenSnackbar(true));
    } catch (error) {
      dispatch(setErrorMessage("Something went wrong.."));
      dispatch(setOpenSnackbar(true));
    }
  };
};

export const { setCity, setLoading } = citySlice.actions;

export const citySelector = (state: { cityReducer: CityState }) =>
  state.cityReducer;

export default citySlice.reducer;
