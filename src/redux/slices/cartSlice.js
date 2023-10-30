import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCart: [],
  totalPrice: 0,
  windowObj: false
};

const getTotalPrice = (state) => state.itemsCart.reduce((sum, obj) => {
  return obj.price * obj.count + sum;
}, 0)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setWindowObj: (state,action) => {
      state.windowObj = action.payload
    },

    addProduct: (state, action) => {
      const checkItem = state.itemsCart.find((obj) =>
      obj.id === action.payload.id
      );

      checkItem
      ? checkItem.count++
      : state.itemsCart.push({ ...action.payload, count: 1 });
      console.log({...state})
      state.totalPrice = getTotalPrice(state);
      },

    removeProduct: (state, action) => {
      const count = state.itemsCart
        .filter((obj) => obj.id === action.payload.id)
        .filter((obj) => obj.types === action.payload.types)
        .filter((obj) => obj.sizes === action.payload.sizes);
      count.map((i) => {
        state.itemsCart = state.itemsCart.filter((obj) => obj !== i);
      });
      state.totalPrice = getTotalPrice(state);
    },

    clearCart: (state, action) => {
      state.itemsCart = [];
      state.totalPrice = 0;
    },
    
    minusItem: (state, action) => {
      const checkPizza = state.itemsCart.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes
      );
      checkPizza.count > 1 && checkPizza.count--;
      state.totalPrice = getTotalPrice(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart, minusItem,setWindowObj } = cartSlice.actions;

export default cartSlice.reducer;
