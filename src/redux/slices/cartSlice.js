import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  itemsCart: localStorage.cart ? JSON.parse(localStorage.cart) : [],
  totalPrice:  localStorage.totalPrise ? JSON.parse(localStorage.totalPrice) : 0,
  windowObj: false,
  scrollLock: false
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
      state.scrollLock = !state.scrollLock
    },
    addProduct: (state, action) => {
      const checkItem = state.itemsCart.find((obj) =>
      obj.id === action.payload.id &&
      obj.color === action.payload.color &&
      obj.size === action.payload.size
      );  
      
      checkItem
      ? checkItem.count++
      : state.itemsCart.push({ ...action.payload, count: 1 });
      state.totalPrice = getTotalPrice(state);

      localStorage.cart = JSON.stringify(state.itemsCart)
      localStorage.totalPrice = JSON.stringify(state.totalPrice)
    },


    removeProduct: (state, action) => {
      const count = state.itemsCart
        .filter((obj) => obj.id === action.payload.id)
        .filter((obj) => obj.color === action.payload.color)
        .filter((obj) => obj.size === action.payload.size);
      count.map((i) => {
        return state.itemsCart = state.itemsCart.filter((obj) => obj !== i);
      });
      state.totalPrice = getTotalPrice(state);
      localStorage.cart = JSON.stringify(state.itemsCart)
      localStorage.totalPrice = JSON.stringify(state.totalPrice)
    },


    clearCart: (state) => {
      state.itemsCart = [];
      state.totalPrice = 0;
      localStorage.setItem('cart','')
      localStorage.totalPrice = JSON.stringify(state.totalPrice)
    },
    

    minusItem: (state, action) => {
      const checkPizza = state.itemsCart.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.color === action.payload.color &&
          obj.sizes === action.payload.sizes
      );
      checkPizza.count > 1 && checkPizza.count--;
      state.totalPrice = getTotalPrice(state);
      localStorage.cart = JSON.stringify(state.itemsCart)
      localStorage.totalPrice = JSON.stringify(state.totalPrice)
    },
  },

});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart, minusItem,setWindowObj } = cartSlice.actions;

export default cartSlice.reducer;

