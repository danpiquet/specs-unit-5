import { createSlice } from "@reduxjs/toolkit";

export const displayCountry = createSlice({
  name: "appLoading",
  initialState: {
    value: false,
  },
  reducers: {
    loadingTrue: (state) => {
      state.value = true;
    },
    loadingFalse: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { loadingTrue, loadingFalse, toggle } = displayCountry.actions;
export const selectLoading = (state) => state.appLoading.value;
export default displayCountry.reducer;
