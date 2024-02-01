import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './features/images/store/imagesSlice';
import optionsReducer from './features/options/store/optionsSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    options: optionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
