import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogItems } from "./catalogSlice";

export type CartItem = {id:number, article:string, category:string, fullName:string, name:string, price:number, size:string, img:string, color:string, count:number,}

interface CartInitial {
  itemsCart: CartItem[];
  totalPrice: number;
  windowObj: CatalogItems | null;
  scrollLock: boolean;
}

const initialState: CartInitial = {
  itemsCart: localStorage.cart ? JSON.parse(localStorage.cart) : [],
  totalPrice:  localStorage.totalPrise ? JSON.parse(localStorage.totalPrice) : 0,
  windowObj: null,
  scrollLock: false
};

 const getTotalPrice = (state: {itemsCart: CartItem[]}) => state.itemsCart.reduce((sum: number, obj: {price:number;count:number}) => {
  return obj.price * obj.count + sum;
}, 0)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setWindowObj: (state,action: PayloadAction<CatalogItems | null>) => {
      state.windowObj = action.payload
      state.scrollLock = !state.scrollLock
    },
    addProduct: (state, action: PayloadAction<CartItem>) => {
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


    removeProduct: (state, action: PayloadAction<CartItem>) => {
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
    

    minusItem: (state, action: PayloadAction<CartItem>) => {
      const checkPizza = state.itemsCart.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.color === action.payload.color &&
          obj.size === action.payload.size
      );
      (checkPizza && checkPizza.count > 1) && checkPizza.count--;
      state.totalPrice = getTotalPrice(state);
      localStorage.cart = JSON.stringify(state.itemsCart)
      localStorage.totalPrice = JSON.stringify(state.totalPrice)
    },
  },

});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart, minusItem,setWindowObj } = cartSlice.actions;

export default cartSlice.reducer;

