import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from '../api/storeApi'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [storeApi.reducerPath]: storeApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(storeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch