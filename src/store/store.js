// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // ... other reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
