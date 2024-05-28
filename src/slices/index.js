export const baseReducer = {
  millCardReducer: (state, action) => {
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
  setInitalMillCardReducer: (state, action) => {
    return {
      ...state,
      millCards: action.payload,
    };
  },
};
