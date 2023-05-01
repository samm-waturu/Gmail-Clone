import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import pluginReducer from '../features/pluginSlice';
import userSlice  from '../features/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    plugin: pluginReducer,
    user: userSlice
  },
});
