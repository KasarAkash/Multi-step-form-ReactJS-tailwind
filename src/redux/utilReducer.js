import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  initialState: {
    step: 1,
    subscription: false,
    plan: "Arcade",
  },
  name: "Utils Slice",
  reducers: {
    setSub: (state, action) => {
      state.subscription = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlan, setStep, setSub } = utilSlice.actions;
export default utilSlice.reducer;
