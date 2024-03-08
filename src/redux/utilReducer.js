import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  initialState: {
    step: 1,
    step2data: {
      plan: {
        text: "Arcade",
        price: "$9/mo",
      },
      subscription: "Monthly",
    },
    step3data: [],
  },
  name: "Utils Slice",
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setStep2Data: (state, actions) => {
      state.step2data.plan = actions.payload[0];
      state.step2data.subscription = actions.payload[1];
    },
    setStep3Data: (state, actions) => {
      state.step3data = actions.payload;
    },
  },
});

export const { setStep, setStep2Data, setStep3Data } = utilSlice.actions;
export default utilSlice.reducer;
