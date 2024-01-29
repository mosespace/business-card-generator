import cardSidesSlice from "./slices/cardSidesSlice";
import backgroundColorSlice from "./slices/backgroundColorSlice";

const { configureStore } = require("@reduxjs/toolkit");

// creating a store and giving it slices
export const store = configureStore({
  reducer: {
    sideChange: cardSidesSlice,
    colorChange: backgroundColorSlice,
  },
});
