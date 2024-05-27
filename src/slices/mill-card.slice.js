import { createSlice } from "@reduxjs/toolkit";
import { millCardState } from "../constants";

export const millCardForReviewSlice = createSlice({
  name: "mill-card-review",
  initialState: millCardState,
  reducers: {
    reviewPageMillCardReducer: (state, action) => {
      const updatedMillData = state.millCards.map((mill) =>
        mill.id === action.payload.millId
          ? { ...mill, deliveredPrice: action.payload.millPrice }
          : mill
      );
      return {
        ...state,
        millCards: updatedMillData,
      };
    },
  },
});

export const { reviewPageMillCardReducer } = millCardForReviewSlice.actions;
export default millCardForReviewSlice.reducer;
