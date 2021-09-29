import Todo from '../models/todo';
import { initStore } from './store';

type StateObject = {
  items: Todo[];
};

const configureStore = () => {
  const actions: {[key: string]: (state: StateObject, payload: any) => {}} = {
    ADD_TODO: (state, text) => {
      const updatedItems = [ ...state.items ];
      updatedItems.push(new Todo(text));
      return { items: updatedItems };
    },
    REMOVE_TODO: (state, id) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      return { items: updatedItems };
    },
    SET_DATA: (state, data) => {
      console.log(data);
      return state;
    },
  };
  initStore(actions, { items: [] });
};

export default configureStore;