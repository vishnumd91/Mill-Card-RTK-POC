import { createSlice } from "@reduxjs/toolkit";
import { millCardState } from "../constants";
import { baseReducer } from ".";

export const millCardForReviewSlice = createSlice({
  name: "mill-card-review",
  initialState: millCardState,
  reducers: {
    reviewPageMillCardReducer: baseReducer.millCardReducer,
  },
});

export const { reviewPageMillCardReducer } = millCardForReviewSlice.actions;
export default millCardForReviewSlice.reducer;
