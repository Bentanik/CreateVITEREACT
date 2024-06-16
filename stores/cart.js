import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: false,
  cart: [],
  price: 0,
};

const cartSlice = createSlice({
  initialState,
  name: "carts",
  // Action = course
  reducers: {
    addCourse: (state, action) => {
      const { id, price } = action.payload;
      state.cart.push(id);
      state.price += +price;
    },
    removeCourseById: (state, action) => {
      const { id, price } = action.payload;
      state.cart = state.cart.filter((cart) => cart != id);
      state.price -= +price;
    },
  },
});

export const { addCourse, removeCourseById } = cartSlice.actions;
export default cartSlice.reducer;
