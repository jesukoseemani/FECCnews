import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
};

export const newsReducer = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { addNews } = newsReducer.actions;
export default newsReducer.reducer;
