/* eslint-disable no-empty-pattern */
// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   products: [],
//   selectedProduct: {},
//   loading: false,
// };

// const BASE_URL = "https://fakestoreapi.com";
// export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
//   const response = await axios.get(`${BASE_URL}/products`);
//   return response.data;
// });

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setSelectedProduct: (state, action) => {
//       state.selectedProduct = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(getAllProducts.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(getAllProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     });
//   },
// });

// export const {setSelectedProduct} = productSlice.actions;

// export default productSlice.reducer;

// -------------------------

/* eslint-disable no-empty-pattern */
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import productsData from "../../data";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

// API yerine local verileri kullan
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  return productsData;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const {setSelectedProduct} = productSlice.actions;

export default productSlice.reducer;
