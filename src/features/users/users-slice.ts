import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Person from '../../models/person';
import PersonUtils from '../../models/person-utils';

interface UsersState {
  namesToIds: {[key: string]: number};
  page: number;
  users: Person[];
};

const initialState: UsersState = {
  namesToIds: {},
  page: 1,
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<Person[]>) {
      const users = action.payload;
      const namesToIds = PersonUtils.mapNamesToIds(users);
      PersonUtils.normaliseFriends(users, namesToIds);
      state.namesToIds = namesToIds;
      state.users = users;
    },
    addUser(state, action: PayloadAction<Person>) {
      state.users.unshift(action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    }
  },
});

export const { addUser, setPage, setUsers } = usersSlice.actions;

export default usersSlice.reducer;