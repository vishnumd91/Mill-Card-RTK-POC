import { createSlice } from "@reduxjs/toolkit";
import { baseReducer } from ".";

export const millCardForOrderSlice = createSlice({
  name: "mill-card-order",
  initialState: { millCards: [] },
  reducers: {
    setInitalMillCardReducer: baseReducer.setInitalMillCardReducer,
    orderPageMillCardReducer: baseReducer.millCardReducer,
  },
});

export const { orderPageMillCardReducer, setInitalMillCardReducer } =
  millCardForOrderSlice.actions;
export default millCardForOrderSlice.reducer;
