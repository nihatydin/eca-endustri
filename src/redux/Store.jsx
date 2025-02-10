import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../redux/slices/productSlices";
// import appReducer from "../redux/slices/appSlice";
// import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    // app: appReducer,
    // basket: basketReducer,
  },
});
