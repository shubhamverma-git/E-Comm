import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/todo/todoSlide";

export const store = configureStore({
  reducer: todoReducer,
});
