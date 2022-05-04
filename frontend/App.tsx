import React from "react";
import { Provider } from "react-redux";
import AllNavigations from "./AllNavigations";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AllNavigations />
    </Provider>
  );
}
