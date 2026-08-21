import { configureStore } from "@reduxjs/toolkit";

import filmReducer from "./slice/filmSlice.js";

const store = configureStore({
  reducer: {
    filmState: filmReducer,
  },
});

export default store
