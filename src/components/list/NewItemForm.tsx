import React, { useReducer } from "react";
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Button, Card, CardActions, CardContent, CardHeader, Chip, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Person from "../../models/person";

// Icons
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

enum ActionTypes {
  UPDATE,
};

interface Action {
  type: ActionTypes;
  payload?: Partial<Person>;
};

interface PersonState {
  person: Person;
};

type NewItemFormProps = {
  onSave?: (person: Person) => void;
  onCancel?: () => void;
};

const personReducer = (state: PersonState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.UPDATE:
      return { person: Object.assign(new Person(), { ...state.person, ...payload }) };
    default:
      return state;
  }
};

const NewItemForm: React.FC<NewItemFormProps> = ({ onCancel = () => { }, onSave = () => { } }) => {

  const [personState, dispatchPerson] = useReducer(personReducer, { person: new Person() });

  const weightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { weight: Number(event.target.value ?? 0) } });
  };

  const heightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { height: Number(event.target.value ?? 0) } });
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { name: event.target.value } });
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { age: Number(event.target.value ?? 0) } });
  };

  const hairColourChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { hair_color: event.target.value } });
  };

  const professionsChangeHandler = (event: React.SyntheticEvent, value: (string | string[])[], reason: AutocompleteChangeReason, details: AutocompleteChangeDetails<string[]> | undefined) => {
    dispatchPerson({ type: ActionTypes.UPDATE, payload: { professions: value as string[] } });
  };

  const onSaveHandler = () => {
    onSave(personState.person);
  }

  return (
    <Card
      elevation={0}
    >
      <CardHeader title="Add user" titleTypographyProps={{ fontWeight: 200 }} />
      <CardContent>
        <TextField
          value={personState.person.name}
          onChange={nameChangeHandler}
          label="Name"
          id="outlined-start-adornment"
          sx={{ my: 1, width: "100%" }}
        />
        <Autocomplete
          multiple
          freeSolo
          value={personState.person.professions}
          onChange={professionsChangeHandler}
          options={[]}
          renderTags={(value: unknown[], getTagProps) =>
            (value as string[]).map((option: string, index: number) => (
              <Chip color="primary" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Professions"
            />
          )}
        />
        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-age">Age</InputLabel>
          <OutlinedInput
            id="outlined-adornment-age"
            value={personState.person.age}
            onChange={ageChangeHandler}
            startAdornment={
              <InputAdornment position="start">
                <CakeOutlinedIcon />
              </InputAdornment>
            }
            label="Age"
          />
        </FormControl>
        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-haircolour">Hair colour</InputLabel>
          <OutlinedInput
            id="outlined-adornment-haircolour"
            value={personState.person.hair_color}
            onChange={hairColourChangeHandler}
            startAdornment={
              <InputAdornment position="start">
                <PaletteOutlinedIcon />
              </InputAdornment>
            }
            label="Hair colour"
          />
        </FormControl>
        <TextField
          value={personState.person.height}
          onChange={heightChangeHandler}
          label="Height"
          id="outlined-start-adornment"
          sx={{ my: 1, width: "100%" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
        />
        <TextField
          value={personState.person.weight}
          onChange={weightChangeHandler}
          label="Weight"
          id="outlined-start-adornment"
          sx={{ my: 1, width: "100%" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="warning" onClick={onCancel}>Cancel</Button>
        <Button autoFocus onClick={onSaveHandler}>Add user</Button>
      </CardActions>
    </Card>
  );
};

export default NewItemForm;
