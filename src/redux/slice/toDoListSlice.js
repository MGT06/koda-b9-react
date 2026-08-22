import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

function getToDo(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 300);
  });
}

export const addToDoListThunk = createAsyncThunk(
  "add_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getToDo(payload);
      if (!data) throw new Error("data belum siap");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const removeToDoListThunk = createAsyncThunk(
  "remove_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getToDo(payload);
      if (!data) throw new Error("data belum siap");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const toggleToDoListThunk = createAsyncThunk(
  "toggle_todo",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getToDo(payload);
      if (!data) throw new Error("data belum siap");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(addToDoListThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.todolist.push(payload);
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(removeToDoListThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.todolist = state.todolist.filter(
            (data) => data.title !== payload,
          );
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(toggleToDoListThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.todolist.forEach((ele) => {
            if (ele.title === payload) {
              ele.status = ele.status === "inactive" ? "active" : "inactive";
            }
          });
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      });
  },
});

export default toDoSlice.reducer;
