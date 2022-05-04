import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../index";
import { Country, CountryState } from "./types";
import { Platform } from "react-native";

let baseURL: string | null = null;
Platform.OS === "android"
  ? (baseURL = "http://10.0.2.2:4000")
  : (baseURL = "http://localhost:4000");

const initialState: CountryState = {
  country: {},
  errorMessage: "",
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
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
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
      const { data } = await axios.get(url);
      dispatch(setCountry(data));
    } catch (error) {
      dispatch(setErrorMessage("Something went wrong.."));
    }
  };
};

export const { setCountry, setErrorMessage, setLoading } = countrySlice.actions;

export const countrySelector = (state: { countryReducer: CountryState }) =>
  state.countryReducer;

export default countrySlice.reducer;
