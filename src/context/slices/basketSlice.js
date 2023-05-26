import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = [...items, action.payload];
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItems, removeItems } = basketSlice.actions;

export default basketSlice.reducer;
