import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendSuccessful: false
  // status: 'idle',
};

export const pluginSlice = createSlice({
  name: 'plugin',
  initialState,
  reducers: {
    onSendSuccessful: (state) => {
      state.sendSuccessful = true;
    },
    onFailToSend: (state) => {
      state.sendSuccessful = false;
    }
  }
});

export const { onSendSuccessful, onFailToSend } = pluginSlice.actions;

export const isSendSuccessful = (state) => state.plugin.sendSuccessful;

export default pluginSlice.reducer;
