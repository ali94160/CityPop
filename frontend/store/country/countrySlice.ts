import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../index";
import { Country, CountryState } from "./types";
import { Platform } from "react-native";
import { setErrorMessage, setOpenSnackbar } from "../errorHandler/errorSlice";

let baseURL: string | null = null;
Platform.OS === "android"
  ? (baseURL = "http://10.0.2.2:4000")
  : (baseURL = "http://localhost:4000");

const initialState: CountryState = {
  country: {},
  loading: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, { payload }: PayloadAction<Country>) => {
      state.loading = false;
      state.country = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const getCountry = (searchWord: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const url = `${baseURL}/rest/country/${searchWord}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch(setCountry(response.data));
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

export const { setCountry, setLoading } = countrySlice.actions;

export const countrySelector = (state: { countryReducer: CountryState }) =>
  state.countryReducer;

export default countrySlice.reducer;
