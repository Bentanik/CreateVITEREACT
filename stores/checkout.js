import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: false,
  checkout: [],
  price: 0,
};

const cartSlice = createSlice({
  initialState,
  name: "checkouts",
  // Action = course
  reducers: {
    addCourseCheckout: (state, action) => {
      const { id, price } = action.payload;
      state.checkout.push(id);
      state.price = +price;
    },
    addCardCheckout: (state, action) => {
      const { ids, price } = action.payload;
      state.checkout = ids;
      state.price = +price;
    },
    resetCheckout: (state) => {
      state.checkout = [];
      state.price = 0;
    },
  },
});

export const { addCourseCheckout, addCardCheckout, resetCheckout } =
  cartSlice.actions;
export default cartSlice.reducer;
