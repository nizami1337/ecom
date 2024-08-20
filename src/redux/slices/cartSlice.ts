import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Item } from '../../types'

type CartItem = {
  item: Item,
  quantity: number;
}

interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cartItems.push({item: action.payload, quantity: 1})
    },
  },
})

export const { addToCart } = cartSlice.actions
export const getCartItems = (state: RootState) => state.cart.cartItems
export default cartSlice.reducer