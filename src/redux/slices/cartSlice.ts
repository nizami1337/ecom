import { createSlice, current } from '@reduxjs/toolkit'
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
    changeQuantity: (state, action: PayloadAction<CartItem>) => {
      console.log('start')
      const index = state.cartItems.findIndex(item => item = action.payload)
      state.cartItems[index].quantity = action.payload.quantity
      // console.log(state.cartItems)
      // console.log(state.cartItems[index])
    },
  },
})

export const { addToCart, changeQuantity } = cartSlice.actions
export const getCartItems = (state: RootState) => state.cart.cartItems
export default cartSlice.reducer