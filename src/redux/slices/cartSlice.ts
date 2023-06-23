import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  urlImg: string;
  productName: string;
  description: string;
  price: number;
  count: number;
};

export type SupplementsItem = {
  namePlusId: string;
  asProductId: string;
  urlImg: string;
  name: string;
  price: number;
  seqnum?: string;
  count: number;
};

interface SliceState {
  items: CartItem[];
  supplements: SupplementsItem[];
}

const initialState: SliceState = {
  items: [],
  supplements: [],
};

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findeItem = state.items.find((obj: CartItem) => obj.id === action.payload.id);

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
      state.supplements = [];
    },

    addIngredient(state, action: PayloadAction<SupplementsItem>) {
      const findeItem = state.supplements.find(
        (obj: SupplementsItem) => obj.namePlusId === action.payload.namePlusId,
      );

      if (findeItem) {
        findeItem.count++;
      } else {
        state.supplements.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    minusIngredient(state, action: PayloadAction<string>) {
      const findeItem = state.supplements.find(
        (obj: SupplementsItem) => obj.namePlusId === action.payload,
      );
      if (findeItem) {
        findeItem.count--;
      }
    },
    removeIngredient(state, action: PayloadAction<String>) {
      state.supplements = state.supplements.filter((obj) => obj.namePlusId !== action.payload);
    },
    clearIngredients(state, action: PayloadAction<SupplementsItem>) {
      state.supplements = state.supplements.filter((obj) => obj.namePlusId !== action.payload.namePlusId);
      console.log(action.payload);
    },
  },
});

export const {
  addItem,
  minusItem,
  removeItem,
  clearItems,
  addIngredient,
  removeIngredient,
  minusIngredient,
  clearIngredients,
} = cartSlice.actions;

export default cartSlice.reducer;
