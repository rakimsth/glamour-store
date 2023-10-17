import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { list, getById } from "../services/products";

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

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const res = await getById(id);
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
        state.error = action.error.message;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
      })
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setLimit } = productSlice.actions;

export const productReducer = productSlice.reducer;
