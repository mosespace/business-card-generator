import cardSidesSlice from "./slices/cardSidesSlice";
const { configureStore } = require("@reduxjs/toolkit");

// creating a store and giving it slices
export const store = configureStore({
  reducer: {
    sideChange: cardSidesSlice,
  },
});
