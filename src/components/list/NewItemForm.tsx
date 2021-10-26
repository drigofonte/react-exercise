import React from "react";
import { Autocomplete, Button, Card, CardActions, CardContent, CardHeader, Chip, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Person from "../../models/person";
import { useTextInput, useAutocompleteInput } from '../../hooks';

// Icons
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

type NewItemFormProps = {
  onSave?: (person: Person) => void;
  onCancel?: () => void;
};

const NewItemForm: React.FC<NewItemFormProps> = ({ onCancel = () => { }, onSave = () => { } }) => {
  const {
    value: value_name,
    hasError: hasError_name,
    isValid: isValid_name,
    changeHandler: changeHandler_name,
    blurHandler: blurHandler_name,
    reset: reset_name,
  } = useTextInput((v) => v !== '');

  const {
    value: value_weight,
    hasError: hasError_weight,
    isValid: isValid_weight,
    changeHandler: changeHandler_weight,
    blurHandler: blurHandler_weight,
    reset: reset_weight,
  } = useTextInput((v) => v !== '');

  const {
    value: value_height,
    hasError: hasError_height,
    isValid: isValid_height,
    changeHandler: changeHandler_height,
    blurHandler: blurHandler_height,
    reset: reset_height,
  } = useTextInput((v) => v !== '');

  const {
    value: value_age,
    hasError: hasError_age,
    isValid: isValid_age,
    changeHandler: changeHandler_age,
    blurHandler: blurHandler_age,
    reset: reset_age,
  } = useTextInput((v) => v !== '');

  const {
    value: value_hair_color,
    hasError: hasError_hair_color,
    isValid: isValid_hair_color,
    changeHandler: changeHandler_hair_color,
    blurHandler: blurHandler_hair_color,
    reset: reset_hair_color,
  } = useTextInput((v) => v !== '');

  const {
    value: value_professions,
    hasError: hasError_professions,
    isValid: isValid_professions,
    changeHandler: changeHandler_professions,
    blurHandler: blurHandler_professions,
    reset: reset_professions,
  } = useAutocompleteInput((v) => v.length > 0);

  const isValid = isValid_name
    && isValid_height
    && isValid_weight
    && isValid_age
    && isValid_hair_color
    && isValid_professions;

  const onSaveHandler = () => {
    if (!isValid) {
      return;
    }

    const person = new Person();
    person.name = value_name;
    person.height = Number(value_height);
    person.weight = Number(value_weight);
    person.age = Number(value_age);
    person.hair_color = value_hair_color;
    person.professions = value_professions;

    onSave(person);

    reset_name();
    reset_height();
    reset_weight();
    reset_age();
    reset_hair_color();
    reset_professions();
  }

  return (
    <Card
      elevation={0}
    >
      <CardHeader title="Add user" titleTypographyProps={{ fontWeight: 200 }} />
      <CardContent>
        <TextField
          value={value_name}
          onChange={changeHandler_name}
          onBlur={blurHandler_name}
          error={hasError_name}
          helperText={hasError_name && "You must enter the new user's name"}
          label="Name"
          id="outlined-start-adornment"
          sx={{ my: 1, width: "100%" }}
        />
        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
          <Autocomplete
            multiple
            freeSolo
            value={value_professions}
            onChange={changeHandler_professions}
            onBlur={blurHandler_professions}
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
                label="Professions"
                error={hasError_professions}
                helperText={hasError_professions && "You must enter at least one profession"}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
          <InputLabel error={hasError_age} htmlFor="outlined-adornment-age">Age</InputLabel>
          <OutlinedInput
            id="outlined-adornment-age"
            value={value_age}
            onChange={changeHandler_age}
            onBlur={blurHandler_age}
            error={hasError_age}
            startAdornment={
              <InputAdornment position="start">
                <CakeOutlinedIcon />
              </InputAdornment>
            }
            label="Age"
          />
          {hasError_age && <FormHelperText error={hasError_age} id="outlined-age-helper-text">You must enter an age</FormHelperText>}
        </FormControl>
        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
          <InputLabel error={hasError_hair_color} htmlFor="outlined-adornment-haircolour">Hair colour</InputLabel>
          <OutlinedInput
            id="outlined-adornment-haircolour"
            value={value_hair_color}
            onChange={changeHandler_hair_color}
            onBlur={blurHandler_hair_color}
            error={hasError_hair_color}
            startAdornment={
              <InputAdornment position="start">
                <PaletteOutlinedIcon />
              </InputAdornment>
            }
            label="Hair colour"
          />
          {hasError_hair_color && <FormHelperText error={hasError_hair_color} id="outlined-age-helper-text">You must enter your hair colour</FormHelperText>}
        </FormControl>
        <TextField
          value={value_height}
          onChange={changeHandler_height}
          onBlur={blurHandler_height}
          error={hasError_height}
          helperText={hasError_height && "You must enter a height"}
          label="Height"
          id="outlined-start-adornment"
          sx={{ my: 1, width: "100%" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
        />
        <TextField
          value={value_weight}
          onChange={changeHandler_weight}
          onBlur={blurHandler_weight}
          error={hasError_weight}
          helperText={hasError_weight && "You must enter a weight"}
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
        <Button autoFocus disabled={!isValid} onClick={onSaveHandler}>Add user</Button>
      </CardActions>
    </Card>
  );
};

export default NewItemForm;
