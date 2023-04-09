import { configureStore } from "@reduxjs/toolkit";

import drawerSlice from "./redux/feature/drawerSlice";
// import modalSlice from "./redux/feature/modalSlice";
import authSlice from "./redux/feature/authSlice";
import learningPathSlice from "./redux/feature/learningPathSlice";


export const store = configureStore({
  reducer: {
    // modal: modalSlice,
    drawer: drawerSlice,
    auth: authSlice,
    learningPath: learningPathSlice,
  },
  devTools: process.env.NODE_ENV === "development" ? true : false,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
     
    ),
});
