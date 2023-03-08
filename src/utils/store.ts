import { configureStore } from '@reduxjs/toolkit';
import mainSlice from 'utils/mainReducer';

const store = configureStore({
  reducer: { main: mainSlice.reducer },
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
