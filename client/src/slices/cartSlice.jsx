import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      //if item exists
      if (existingItem) {
        if (existingItem?.quantity < action.payload.quantity) {
          existingItem.quantity++;
          state.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.quantity++;
      }
    },
    // REMOVE FROM CART
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.quantity = removeItem.reduce((acc, obj) => acc + obj.quantity, 0);
      state.cart = removeItem;
    },
    // INCREASE QUANTITY
    increaseQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload.id
      );
      const product = action.payload.products.find(
        (product) => product?._id === existingItem?._id
      );
      if (existingItem) {
        if (existingItem?.quantity < product?.quantity) {
          existingItem.quantity++;
          state.quantity++;
        }
      }
    },
    // DECREASE QUANTITY
    decreaseQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingItem.quantity === 1) {
        existingItem.quantity = 1;
      } else {
        existingItem.quantity--;
        state.quantity--;
      }
    },

    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item._id === product._id);
      //if item exists
      if (existingItem) {
        if (existingItem?.quantity < product.quantity) {
          if (quantity) {
            existingItem.quantity = existingItem.quantity + quantity;
            state.quantity = state.quantity + quantity;
          } else {
            existingItem.quantity++;
            state.quantity++;
          }
        }
      } else {
        if (quantity) {
          state.cart.push({ ...product, quantity: quantity });
          state.quantity = state.quantity + quantity;
        } else {
          state.cart.push({ ...product, quantity: 1 });
          state.quantity++;
        }
      }
    },
    removeAll: (state) => {
      state.cart = [];
      state.quantity = 0;
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeAll,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
