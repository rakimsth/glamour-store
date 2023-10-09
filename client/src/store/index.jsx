import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // LS
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { cartReducer } from "../slices/cartSlice";
import { productReducer } from "../slices/productSlice";

const persistConfig = {
  key: "cart",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const newStore = persistStore(store);
