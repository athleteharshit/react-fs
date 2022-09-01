import { RootState } from '../../setup/store/store';

export const selectUser = (state: RootState) => state.user;
