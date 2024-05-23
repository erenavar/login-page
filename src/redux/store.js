import { configureStore, createSlice } from "@reduxjs/toolkit";
import userReducer, { setPassword } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

