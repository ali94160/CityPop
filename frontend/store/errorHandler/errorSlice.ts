import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from "./types";

const initialState: ErrorState = {
  openSnackbar: false,
  errorMessage: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
    setOpenSnackbar: (state, { payload }: PayloadAction<boolean>) => {
      state.openSnackbar = payload;
    },
  },
});


export const { setErrorMessage, setOpenSnackbar } = errorSlice.actions;

export const errorSelector = (state: { errorReducer: ErrorState }) =>
  state.errorReducer;

export default errorSlice.reducer;
