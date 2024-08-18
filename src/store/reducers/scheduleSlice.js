import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getHomeArticles = createAsyncThunk(
//   "getHomeArticle",
//   async (data) => {
//     const res = await axios.get(
//       process.env.REACT_APP_BASE_URL + "/api/article/home",
//       { params: data.followers }
//     );
//     return res.data;
//   }
// );

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {},
  reducers: {},
  // extraReducers: {
  // [getMyArticles.fulfilled]: (state, { payload }) => {
  //   state.result = [...payload.article];
  //   state.isLoading = false;
  // },
  // },
});

export const {} = scheduleSlice.actions;
export default scheduleSlice.reducer;
