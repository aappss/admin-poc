// userActions.js

import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from '../../api/api';

export const getUser = createAsyncThunk(
  "loginDetail",
  async () => {
    try {
      // const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}+${api.login}`);
      const response = await fetch('https://beta.herovired.com/local/signin/signin_api.php?phone=9739384070&otp=223344&type=verify');
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
    }
  }
);

const initialState = {
  isLoaded: false,
  isUser: false,
  loading: false,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userDetail(state) {
      state.userInfo = payload;
    }
  },
  extraReducers: {
    // login user reducer ...
    // register user reducer ...
    [getUser.pending]: (state) => {
      state.loading = true;
      state.isLoaded = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isUser = true;
      state.isLoaded = true;
      state.userInfo = payload;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isUser = false;
      state.isLoaded = true;
    },
  },
});

export const { userDetail } = authSlice.actions;

export default authSlice.reducer;
