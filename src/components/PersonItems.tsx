import { useCallback, useEffect, useState } from 'react';
import PersonItem from './PersonItem';
import Person from '../models/person';
import PersonLoader from '../models/person-loader';
import { Grid } from '@mui/material';

const PersonItems: React.FC = () => {
  const [ people, setPeople ] = useState<Person[]>([]);

  const setPeopleCallback = useCallback(async () => {
    setPeople(await PersonLoader.getPeople());
  }, []);

  useEffect(() => {
    setPeopleCallback();
  }, [setPeopleCallback]);

  return (
    <Grid
      container
      spacing={2}
    >
      {people!.map((person) => (
        <Grid item xs>
          <PersonItem
            key={person.id}
            person={person}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default PersonItems;