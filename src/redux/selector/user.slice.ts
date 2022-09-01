/* eslint-disable no-console */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../setup/store/store';
import { User } from '../../services/user';
import { IUser } from '../../pages/posts/models';

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId: number) => {
  const response = await User.getUserById(userId);
  return response.data;
});

interface UsersState {
  entities: IUser;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: {} as IUser,
  loading: 'idle',
} as UsersState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.entities = action.payload;
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export default usersSlice.reducer;
