import { createSlice } from "@reduxjs/toolkit";
import { millCardState } from "../constants";

export const millCardForOrderSlice = createSlice({
  name: "mill-card-order",
  initialState: millCardState,
  reducers: {
    orderPageMillCardReducer: (state, action) => {
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

export const { orderPageMillCardReducer } = millCardForOrderSlice.actions;
export default millCardForOrderSlice.reducer;
