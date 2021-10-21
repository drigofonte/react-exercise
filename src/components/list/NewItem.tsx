import React from "react";
import { Backdrop, Dialog, DialogContent } from "@mui/material";
import NewItemForm from './NewItemForm';
import Person from "../../models/person";
import { useStore } from '../../store/store';

const NewItem: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
  const [ , dispatch ] = useStore();

  const saveHandler = (person: Person) => {
    dispatch('ADD_PERSON', person);
    onClose();
  };

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <DialogContent>
        <NewItemForm onSave={saveHandler} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default NewItem;