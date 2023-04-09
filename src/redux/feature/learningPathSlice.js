// userActions.js

import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from '../../api/api';

export const getLearningPath = createAsyncThunk(
  "learningPath",
  async (token) => {
    // console.log('Token = ', token);
    try {
      // const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}+${api.login}`);
      const response = await fetch(`https://beta.herovired.com/webservice/rest/server.php?wstoken=${token}&wsfunction=block_paradiso_lpd_get_lpd_info&moodlewsrestformat=json&userid=176`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  loading: false,
  learningPath: {},
};

const learningPathSlice = createSlice({
  name: "learningPath",
  initialState,
  reducers: {
    learningPath(state) {
      state.learningPath = payload;
    }
  },
  extraReducers: {
    [getLearningPath.pending]: (state) => {
      state.loading = true;
    },
    [getLearningPath.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.learningPath = payload;
    },
    [getLearningPath.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { learningPath } = learningPathSlice.actions;

export default learningPathSlice.reducer;
