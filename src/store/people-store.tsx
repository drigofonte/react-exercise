import PersonLoader from '../models/person-loader';
import Person from "../models/person";
import { initStore } from "./store";

type StateObject = {
  people: Person[];
};

const configureStore = () => {
  const actions: {[key: string]: (state: StateObject, payload: any) => {}} = {
    LOAD_PEOPLE: async () => {
      const people = await PersonLoader.getPeople();
      return { people };
    },
    SET_PEOPLE: (state, people) => {
      return { people };
    },
  };

  initStore(actions, { people: [] });
};

export default configureStore;