import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const filmSlice = createSlice({
  name: "filmReview",
  initialState,
  reducers: {
    addReview: (prev, { payload }) => {
      return {
        ...prev,
        data: [...prev.data, payload],
      };
    },
    removeReview: (prev, { payload }) => {
      return {
        ...prev,
        data: prev.data.filter((data) => data.name !== payload),
      };
    },
  },
});

export const { addReview, removeReview } = filmSlice.actions;
export default filmSlice.reducer;
