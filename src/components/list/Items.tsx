import Item from './item/Item';
import { Grid, IconButton, Pagination, Stack, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import ItemSkeleton from './item/ItemSkeleton';
import NewItem from './NewItem';
// import { useFetchUsersQuery } from '../../features/users/users-api-slice';
import { setPage } from '../../features/users/users-slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

// Icons
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const pageSize = 10;

const Items: React.FC<{ }> = () => {
  const [ isAddPerson, setIsAddPerson ] = useState(false);

  const page = useAppSelector((state) => state.users.page);
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  // const { data: indexedUsers = { users: [] }, isFetching } = useFetchUsersQuery();
  // const { users } = indexedUsers;

  const maxPages = Math.ceil(users.length / 10);
  const maxIndex = page * pageSize;
  const minIndex = maxIndex - pageSize;
  const peoplePage = users.filter((u, i) => i >= minIndex && i < maxIndex);

  const setPageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
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

  // if(!isFetching) {
  if (users.length > 0) {
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