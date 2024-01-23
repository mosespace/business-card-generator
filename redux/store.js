import { configureStore } from "@";
import cardSidesSlice from "./slices/cardSidesSlice";

// creating a store and giving it slices
export const store = configureStore({
  reducer: {
    sideChange: cardSidesSlice,
  },
});
