import PersonLoader from '../models/person-loader';
import Person from "../models/person";
import { initStore } from "./store";
import PersonUtils from '../models/person-utils';

type StateObject = {
  people: Person[];
  peopleNamesToIds: Map<string, number>;
  page: number;
};

const configureStore = () => {
  const actions: {[key: string]: (state: StateObject, payload: any) => {}} = {
    LOAD_PEOPLE: async () => {
      const people = await PersonLoader.getPeople();
      const peopleNamesToIds = PersonUtils.mapNamesToIds(people);
      PersonUtils.normaliseFriends(people, peopleNamesToIds);
      return { people, peopleNamesToIds };
    },
    ADD_PERSON: (state, person) => {
      const people = state.people;
      people.unshift(person);
      return { people };
    },
    SET_PEOPLE: (state, people) => {
      return { people };
    },
    SET_PAGE: (state, page) => {
      return { page };
    },
  };

  initStore(actions, { people: [], peopleNamesToIds: {}, page: 1 });
};

export default configureStore;