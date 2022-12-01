import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweetUrl: '',
  tweet: null,
  tweetId: '1597165510595989504',
  bgColor: 'black',
  textColor: 'white',
  textFont: '',
  isLoading: false,
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    updateTweetUrl: (state, action) => {
      state.tweetUrl = action.payload;
    },
    updateTweetId: (state, action) => {
      state.tweetId = action.payload;
    },
    updateTweet: (state, action) => {
      state.tweet = action.payload;
    },
    updateBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    updateTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    updateTextFont: (state, action) => {
      state.textFont = action.payload;
    },
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  updateTweetUrl,
  updateTweet,
  updateBgColor,
  updateTextColor,
  updateTextFont,
  updateIsLoading,
  updateTweetId,
} = tweetSlice.actions;

export default tweetSlice.reducer;
