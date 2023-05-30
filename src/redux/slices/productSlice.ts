import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../components/ProductCard/ProductCard';

interface SliceState {
  items: CartItem[];
}

const initialState: SliceState = {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findeItem = state.items.find((obj: any) => obj.id === action.payload.id);
      
      if (findeItem) {
        findeItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
  }
})

export const { addItem } = productSlice.actions;

export default productSlice.reducer;