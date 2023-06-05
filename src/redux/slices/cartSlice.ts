import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: number;
  count: number;
};

interface SliceState {
  items: CartItem[];
}

const initialState: SliceState = {
  items: [],
};

const cartSlice = createSlice({
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
    minusItem(state, action: PayloadAction<string>) {
      const findeItem = state.items.find((obj) => obj.id === action.payload);

      if (findeItem) {
        findeItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  }
})

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;