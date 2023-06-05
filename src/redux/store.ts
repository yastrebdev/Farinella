import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import product from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
