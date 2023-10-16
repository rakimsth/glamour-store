import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { list } from "../services/products";

const initialState = {
  products: [],
  product: {},
  total: 0,
  limit: 20,
  currentPage: 1,
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ limit, page }) => {
    const res = await list(limit, page);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.currentPage = 1;
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.data.total;
        state.products = [...action.payload.data.result];
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setLimit } = productSlice.actions;

export const productReducer = productSlice.reducer;
