import { createSlice } from "@reduxjs/toolkit";
import { popupState } from "../constants";

const orderPopupSlice = createSlice({
  name: "order-popup",
  initialState: popupState,
  reducers: {
    openDialog: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { openDialog } = orderPopupSlice.actions;
export default orderPopupSlice.reducer;
