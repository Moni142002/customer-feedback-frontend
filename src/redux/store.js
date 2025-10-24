import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './reducers';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});