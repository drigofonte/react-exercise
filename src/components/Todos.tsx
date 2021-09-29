import React from "react";
import TodoItem from './TodoItem';
import { useStore } from '../store/store';
import Todo from "../models/todo";

const Todos: React.FC = () => {
  const [ state, dispatch ] = useStore();

  const { items }: { items?: Todo[] } = state;

  // const loadData = useCallback(async () => {
  //   const res = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
  //   const data = await res.json();
  //   return data;
  // }, []);

  // useEffect(() => {
  //   loadData().then((data) => dispatch('SET_DATA', data));
  // }, [loadData]);

  return (
    <ul>
      {items!.map(({ id, text }) => (
        <TodoItem text={text} id={id} />
      ))}
    </ul>
  );
}

export default Todos;