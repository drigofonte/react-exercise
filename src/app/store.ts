import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/users/users-slice';
import { usersApiSlice } from '../features/users/users-api-slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddlewhare) => {
    return getDefaultMiddlewhare()
      .concat(usersApiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;