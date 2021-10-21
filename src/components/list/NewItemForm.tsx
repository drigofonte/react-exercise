import React, { useState } from "react";
import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Button, Card, CardActions, Chip, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Person from "../../models/person";

// Icons
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

type NewItemFormProps = {
  onSave?: (person: Person) => void;
  onCancel?: () => void;
};

const NewItemForm: React.FC<NewItemFormProps> = ({ onCancel = () => {}, onSave = () => {} }) => {
  
  const [weight, setWeight] = useState<number>(0);
  const weightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value ?? 0));
  };

  const [height, setHeight] = useState<number>(0);
  const heightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value ?? 0));
  };

  const [name, setName] = useState<string>('');
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [age, setAge] = useState<number>(0);
  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value ?? 0));
  };

  const [hairColour, setHairColour] = useState<string>('');
  const hairColourChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHairColour(event.target.value);
  };

  const [professions, setProfessions] = useState<string[]>([]);
  const professionsChangeHandler = (event: React.SyntheticEvent, value: (string | string[])[], reason: AutocompleteChangeReason, details: AutocompleteChangeDetails<string[]> | undefined) => {
    console.log(value as string[]);
    setProfessions(value as string[]);
  };

  const onSaveHandler = () => {
    const person = Object.assign<Person, object>(new Person(), {
      weight,
      height,
      name,
      age,
      hair_color: hairColour,
      professions,
    });
    onSave(person);
  }

  return (
    <Card
      elevation={0}
    >
      <TextField
        value={name}
        onChange={nameChangeHandler}
        label="Name"
        id="outlined-start-adornment"
        sx={{ my: 1, width: "100%" }}
      />
      <Autocomplete
        multiple
        freeSolo
        value={professions}
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
          value={age}
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
          value={hairColour}
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
        value={height}
        onChange={heightChangeHandler}
        label="Height"
        id="outlined-start-adornment"
        sx={{ my: 1, width: "100%" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
      />
      <TextField
        value={weight}
        onChange={weightChangeHandler}
        label="Weight"
        id="outlined-start-adornment"
        sx={{ my: 1, width: "100%" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="warning" onClick={onCancel}>Cancel</Button>
        <Button autoFocus onClick={onSaveHandler}>Add user</Button>
      </CardActions>
    </Card>
  );
};

export default NewItemForm;
