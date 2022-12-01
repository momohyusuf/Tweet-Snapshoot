import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from './features/tweet/tweetSlice';

export const store = configureStore({
  reducer: {
    tweet: tweetReducer,
  },
});
