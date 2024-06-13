import { configureStore } from '@reduxjs/toolkit'
import { productList } from '../services/productlist'
import cartReducer from '../slices/cartSlice';
 const store = configureStore({
  reducer: {
    [productList.reducerPath]:productList.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productList.middleware),
})

export default store;