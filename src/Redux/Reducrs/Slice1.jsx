import { createSlice } from "@reduxjs/toolkit";

export const Slice1 = createSlice({
  name: "counter",

  initialState: {
    count: 200,
  },

  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    inc2: (state) => {
      state.count += 2;
    },
    dec2: (state) => {
      state.count -= 2;
    },
    addnum: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { inc, dec, inc2, dec2, addnum } = Slice1.actions;
export default Slice1.reducer;

