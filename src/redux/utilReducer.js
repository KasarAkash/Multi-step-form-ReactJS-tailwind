import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  initialState: {
    step: 1,
    subscription: false,
    plan: {
      text: "Arcade",
      priceM: "$9/mo",
      priceY: "$90/yr",
    },
    addOn: [{}],
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
    setAddOn: (state, action) => {
      state.addOn = action.payload;
    },
  },
});

export const { setPlan, setStep, setSub, setAddOn } = utilSlice.actions;
export default utilSlice.reducer;
