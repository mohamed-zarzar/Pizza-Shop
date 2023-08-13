import { configureStore } from '@reduxjs/toolkit';

import myPizzaSlice from "./features/myPizzaSlice"
import orderSlice from './features/orderSlice';




const store = configureStore({
    reducer: {
    myPizza: myPizzaSlice,
    orders: orderSlice,
    }
  })










  export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch