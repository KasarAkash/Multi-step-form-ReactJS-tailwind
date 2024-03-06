import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  initialState: {
    subscription: false,
  },
  name: "Utils Slice",
  reducers: {
    setPlan: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { setPlan } = utilSlice.actions;
export default utilSlice.reducer;
