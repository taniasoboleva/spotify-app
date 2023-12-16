import { configureStore } from '@reduxjs/toolkit';
import cardsDataReducer from './actions';

export const store = configureStore({
  reducer: {
    spotifyData: cardsDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
