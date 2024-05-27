import { createSlice } from "@reduxjs/toolkit";

export const millCardForOrderSlice = createSlice({
  name: "mill-card-order",
  initialState: { millCards: [] },
  reducers: {
    setInitalMillCardReducer: (state, action) => {
      return {
        ...state,
        millCards: action.payload,
      };
    },
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

export const { orderPageMillCardReducer, setInitalMillCardReducer } =
  millCardForOrderSlice.actions;
export default millCardForOrderSlice.reducer;
