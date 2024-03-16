import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  FETCHING: "fetching",
  ERROR: "error",
  FETCHED: "fetched",
  NOTFETCHING: "notfetching",
};
const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: STATUSES.NOTFETCHING },
  //   reducers: {
  //     setProducts(state, action) {
  //       state.data = action.payload;
  //     },
  //     setStatus(state, action) {
  //       state.status = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.FETCHING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.FETCHED;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchProducts = createAsyncThunk("products", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

// export function fetchProducts() {
//   return async function (dispatch) {
//     try {
//       dispatch(setStatus(STATUSES.FETCHING));
//       const res = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(res.data));
//       dispatch(setStatus(STATUSES.FETCHED));
//     } catch (error) {
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
