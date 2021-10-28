import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Person from '../../models/person';
import PersonUtils from '../../models/person-utils';

interface IndexedUsers {
  users: Person[];
  namesToIds: {[key: string]: number};
}

const indexUsers = (users: unknown[]) => {
  const people = users.map((v) => Object.assign(new Person(), v));
  const peopleNamesToIds = PersonUtils.mapNamesToIds(people);
  PersonUtils.normaliseFriends(people, peopleNamesToIds);
  return peopleNamesToIds;
}

export const usersApiSlice = createApi({
  reducerPath: 'users-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://raw.githubusercontent.com/rrafols/mobile_test/master',
    prepareHeaders(headers) {
      // Set-up authentication headers here...
      // headers.set('api-key', 'key value ...');
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query<IndexedUsers, void>({
        query() {
          return '/data.json';
        },
        transformResponse: (data: {[key: string]: Person[]}) => {
          const users = data.Brastlewark;
          return {
            users,
            namesToIds: indexUsers(users),
          };
        },
      })
    }
  }
});

export const { useFetchUsersQuery } = usersApiSlice;