import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    _id: null,
    image: null,
    name: null,
    ratings: null,
    address: null,
    latitude: null,
    longitude: null,
    description: null,
    dishes: null,
  },
};

const resturantSlice = createSlice({
  name: "resturantSlice",
  initialState,
  reducers: {
    setResturant: (state, actions) => {
      state.resturant = actions.payload;
    },
  },
});

export const { setResturant } = resturantSlice.actions;
export const selectResturant = (state) => state.resturant.resturant;
export default resturantSlice.reducer;
