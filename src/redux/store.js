import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./utilReducer";

const store = configureStore({
  reducer: {
    util: utilReducer,
  },
});
export default store;
