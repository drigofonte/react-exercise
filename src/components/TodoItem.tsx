import React from "react";
import { useStore } from '../store/store';
import Button from '@mui/material/Button';

const TodoItem: React.FC<{ text: string, id: string }> = ({ text, id }) => {
  const [ , dispatch ] = useStore(false);

  const removeItemHandler = () => {
    dispatch('REMOVE_TODO', id);
  };

  return (
    <div>
      <Button variant="contained" onClick={removeItemHandler}>del</Button> - 
      <li>{text}</li>
    </div>
  );
};

export default TodoItem;