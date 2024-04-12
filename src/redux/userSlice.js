import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});




export default userSlice.reducer;