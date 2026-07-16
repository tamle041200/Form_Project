import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../src/slide";
const store = configureStore({
  reducer: {
    // child reducers
    studentReducer,
  },
});
export default store;
