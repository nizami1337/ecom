import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Item } from '../../types'

interface CartState {
    cartItems: Item[]
}

const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cartItems.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.cartItems.pop(action.payload)
    },
    resetCart: (state) => {
      state.cartItems = []
    }
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export const getCartItems = (state: RootState) => state.cart.cartItems
export default cartSlice.reducer