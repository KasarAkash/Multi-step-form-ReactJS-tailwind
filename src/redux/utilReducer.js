import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  initialState: {
    step: 1,
  },
  name: "Utils Slice",
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = utilSlice.actions;
export default utilSlice.reducer;
