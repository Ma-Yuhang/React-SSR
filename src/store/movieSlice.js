import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "@/api";
// 获取电影列表
export const getListAsync = createAsyncThunk("movieSlice/getMovies", async () => {
  return await getMovies()
});

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    movies: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListAsync.rejected, (state, err) => {
        console.log("rejected 失败", err);
      })
      .addCase(getListAsync.fulfilled, (state, action) => {
        // console.log("获取成功", action.payload);
        state.movies = action.payload.data
      });
  },
})

export default movieSlice.reducer
// export const { getMovies } = movieSlice.actions