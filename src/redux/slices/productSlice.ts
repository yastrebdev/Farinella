import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type ProductItem = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: number;
  rating: number;
  set: boolean;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type ProductState = {
  products: ProductItem[];
  status: Status;
};

const initialState: ProductState = {
  products: [],
  status: Status.LOADING,
};

export const fetchProducts = createAsyncThunk<ProductItem[]>(
  'products/fetchProducts',
  async () => {
      const { data } = await axios.get('https://646c82af7b42c06c3b2b65e5.mockapi.io/items/');
      return data;
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.products = [];
    });
  }
})

export default productSlice.reducer;