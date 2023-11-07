import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  items: [],
  state: '',
  category:'',
  search:''
};

export const getShopItem = createAsyncThunk('giftsItem/fetchItem',async (params)=>{
   const {category,search} = params
    const {data} = await axios.get(`https://6525cd0a67cfb1e59ce7af29.mockapi.io/Gifts?${category ? `category=${category}` : ''}${search ? `&search=${search}` : ''}`) 
    return data
})

export const catalogSlice = createSlice({
  name: "giftsItem",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
      window.scrollTo(0,700)
    },
    setSearch:(state,action)=>{
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getShopItem.pending, (state, action) => {
            state.items = []
            state.status = "loading"
        })
        .addCase(getShopItem.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
        })
        .addCase(getShopItem.rejected, (state, action) => {
            state.items = []
            state.status = "error"
        })
    }
});

export const { setCategory,setSearch } = catalogSlice.actions;

export default catalogSlice.reducer;
