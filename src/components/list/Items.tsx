import { Link } from 'react-router-dom';
import Item from './item/Item';
import Person from '../../models/person';
import { Grid, Pagination, Stack, Typography } from '@mui/material';
import { useStore } from '../../store/store';
import React, { useState } from 'react';

const pageSize = 10;

const Items: React.FC = () => {
  const [ state ] = useStore();
  const { people }: { people?: Person[] } = state;

  const [ page, setPage ] = useState(1);
  const maxPages = Math.ceil(people!.length / 10);
  const maxIndex = page * pageSize;
  const minIndex = maxIndex - pageSize;
  const peoplePage = people!.filter((p, i) => i >= minIndex && i < maxIndex);

  const setPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack
      sx={{
        p: 5
      }}
    >
      <Typography
        variant="h4" 
        sx={{
          mt: 1,
          fontWeight: 700
        }}
      >
        People
      </Typography>
      <Typography
        variant="caption" 
      >
        Page {page} / {maxPages}
      </Typography>
      
      <Grid
        container
        spacing={1}
        sx={{
          mt: 4
        }}
      >
        {peoplePage.map((person) => (
          <Grid key={person.id} item xs>
            <Link
              to={`/people/${person.id}`}
              style={{
                textDecoration: 'none',
                color: 'initial'
              }}
            >
              <Item
                person={person}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={maxPages}
        page={page}
        onChange={setPageHandler}
        sx={{
          mx: 'auto',
          py: 4
        }}
      />
    </Stack>
  );
}

export default Items;