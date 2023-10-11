import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import shipmentsReducer from "./shipments-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    shipments: shipmentsReducer,
  },
});

export default store;
