import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
} from "redux-persist";

import filmReducer from "./slice/filmSlice.js";
import toDoReducer from "./slice/toDoListSlice.js";

const storage = {
  getItem: (key) => {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

const persistConfig = {
  key: "dataForm",
  storage,
};

const store = configureStore({
  reducer: persistCombineReducers(persistConfig, {
    filmState: filmReducer,
    toDoState: toDoReducer,
  }),
});

export const persistor = persistStore(store);

export default store;
