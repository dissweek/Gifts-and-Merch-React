import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"

export type CatalogItems = {
  id:number;
  category:string;
  name:string;
  res:{img:string;color:string}[];
  fullName:string;
  article:string;
  about:string;
  parametr:{name:string;value:string}[];
  price:number;
  size:[string];
}

export enum Status {
  LOADING = 'Loading...',
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export type CatalogParams = {
  category?:string;
  search?:string;
}

interface CatalogInitial {
  items:CatalogItems[]
  state: string;
  category: string;
  search: string;
  status: Status
}

const initialState: CatalogInitial = {
  items: [],
  state: '',
  category:'',
  search:'',
  status: Status.LOADING  
};

export const getShopItem = createAsyncThunk<CatalogItems[],CatalogParams>('giftsItem/fetchItem',async (params)=>{
   const {category,search} = params
    const {data} = await axios.get<CatalogItems[]>(`https://6525cd0a67cfb1e59ce7af29.mockapi.io/Gifts?${category ? `category=${category}` : ''}${search ? `&search=${search}` : ''}`) 
    return data
})

export const catalogSlice = createSlice({
  name: "giftsItem",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
      window.scrollTo(0,700)
    },
    setSearch:(state,action: PayloadAction<string>)=>{
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getShopItem.pending, (state) => {
            state.items = []
            state.status = Status.LOADING
        })
        .addCase(getShopItem.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        .addCase(getShopItem.rejected, (state) => {
            state.items = []
            state.status = Status.ERROR
        })
    }
});

export const { setCategory, setSearch } = catalogSlice.actions;

export default catalogSlice.reducer;
