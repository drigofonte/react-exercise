import { setUsers } from './users-slice';
import PersonLoader from "../../models/person-loader";

export const fetchUsers = () => {
  return async (dispatch: Function) => {
    const users = await PersonLoader.getPeople();
    dispatch(setUsers(users));
  }
}