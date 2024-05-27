import { configureStore } from "@reduxjs/toolkit";
import millCardReducerForReview from "../slices/mill-card.slice";
import millCardForOrderSlice from "../slices/mill-card-order.slice";
import orderPopupReducer from "../slices/order-popup.slice";

export const store = configureStore({
  reducer: {
    millCardReducerForReview,
    millCardForOrderSlice,
    orderPopupReducer,
  },
});
