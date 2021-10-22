import Item from './item/Item';
import Person from '../../models/person';
import { Grid, IconButton, Pagination, Stack, Toolbar } from '@mui/material';
import { useStore } from '../../store/store';
import React, { useState } from 'react';
import ItemSkeleton from './item/ItemSkeleton';
import NewItem from './NewItem';

// Icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const pageSize = 10;

const Items: React.FC<{ }> = () => {
  const [ state, dispatch ] = useStore();
  const { people, page = 1 }: { people?: Person[], page?: number } = state;
  const [ isAddPerson, setIsAddPerson ] = useState(false);

  const maxPages = Math.ceil(people!.length / 10);
  const maxIndex = page * pageSize;
  const minIndex = maxIndex - pageSize;
  const peoplePage = people!.filter((p, i) => i >= minIndex && i < maxIndex);

  const setPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch('SET_PAGE', value);
  };

  const toggleIsAddPerson = () => {
    setIsAddPerson((previous) => !previous);
  };

  let content = (
    <Grid
      container
      spacing={1}
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
      <>
        <NewItem open={isAddPerson} onClose={toggleIsAddPerson} />
        <Toolbar
          sx={{
            justifyContent: 'flex-end'
          }}
        >
          <IconButton onClick={toggleIsAddPerson} color="primary">
            <PersonAddIcon />
          </IconButton>
        </Toolbar>
        <Grid
          container
          spacing={1}
        >
          {peoplePage.map((person) => (
            <Grid key={person.id} item xs>
              <Item person={person} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <Stack
      sx={{
        p: 5
      }}
    >
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