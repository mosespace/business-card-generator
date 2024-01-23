import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
