import { combineReducers, configureStore } from '@reduxjs/toolkit'
import resturantSlice from './slices/resturantSlice'

const reducer = combineReducers({
    resturant: resturantSlice,
})

const store = configureStore({
    reducer,
})

export default store