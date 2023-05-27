import { combineReducers, configureStore } from '@reduxjs/toolkit'
import resturantSlice from './slices/resturantSlice'
import basketSlice from './slices/basketSlice'

const reducer = combineReducers({
    resturant: resturantSlice,
    basket: basketSlice,
})

const store = configureStore({
    reducer,
})

export default store