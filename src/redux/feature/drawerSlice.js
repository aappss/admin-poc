import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: {},
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = !state.open;
      state.data = action.payload ?? state.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
