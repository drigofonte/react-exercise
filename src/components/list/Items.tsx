import { Link } from 'react-router-dom';
import Item from './item/Item';
import Person from '../../models/person';
import { Grid, Pagination, Stack, Typography } from '@mui/material';
import { useStore } from '../../store/store';
import React from 'react';
import ItemSkeleton from './item/ItemSkeleton';

const pageSize = 10;

const Items: React.FC = () => {
  const [ state, dispatch ] = useStore();
  const { people, page = 1 }: { people?: Person[], page?: number } = state;

  const maxPages = Math.ceil(people!.length / 10);
  const maxIndex = page * pageSize;
  const minIndex = maxIndex - pageSize;
  const peoplePage = people!.filter((p, i) => i >= minIndex && i < maxIndex);

  const setPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch('SET_PAGE', value);
  };

  let content = (
    <Grid
      container
      spacing={1}
      sx={{
        mt: 4
      }}
    >
      <Grid item xs>
        <ItemSkeleton />
      </Grid>
      <Grid item xs>
        <ItemSkeleton />
      </Grid>
      <Grid item xs>
        <ItemSkeleton />
      </Grid>
      <Grid item xs>
        <ItemSkeleton />
      </Grid>
    </Grid>
  );

  if (people!.length > 0) {
    content = (
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
    );
  }

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
        {people!.length > 0 ? `Page ${page} / ${maxPages}` : 'Loading...'}
      </Typography>
      
      {content}

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