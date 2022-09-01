import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from '../../redux/slice/user.slice';

const rootReducer = combineReducers({
  user: usersSlice,
});

export default rootReducer;
