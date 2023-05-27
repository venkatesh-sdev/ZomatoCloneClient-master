import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItems: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      state.items = newBasket;
    },
  },
});

export const { addItems, removeItems } = basketSlice.actions;
export const selectedBasketItems = (state) => state.basket.items;
export const selectedBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectedBasketTotal = (state) =>
  state.basket.items.reducer((total, item) => total + item.price, 0);
export default basketSlice.reducer;
