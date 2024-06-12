import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItem";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    items: cartItems,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    increase: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) { item.amount +=1; }
      cartSlice.caseReducers.calculateTotals(state);
    },
    decrease: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) { 
        if (item.amount > 1) { item.amount -=1; }
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = state.items = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
    calculateTotals: (state,) => {
      // 금액
      state.totalPrice = state.items.reduce((total, item) => total + item.amount * item.price, 0);
      // 수량
      state.totalAmount = state.items.reduce((total, item) => total + item.amount, 0);
    }
  }
})

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;